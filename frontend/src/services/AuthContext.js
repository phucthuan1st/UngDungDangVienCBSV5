// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check for existing JWT token upon app start
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");
        if (token) {
            // Send token to backend for verification
            verifyToken(token);
        }
    }, []);

    const verifyToken = async (token) => {
        try {
            const response = await fetch('/verify-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            });
            const data = await response.json();
            if (data.authenticated) {
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error('Error verifying token:', error);
        }
    };

    const login = async (credentials) => {
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });
            const data = await response.json();
            if (data.authenticated) {
                // Set HTTP-only cookie with token
                document.cookie = `token=${data.token}; Secure; HttpOnly; SameSite=Strict`;
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const logout = () => {
        // Remove HTTP-only cookie
        document.cookie = 'token=; Max-Age=0; Secure; HttpOnly; SameSite=Strict';
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
