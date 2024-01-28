import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check for existing authentication upon app start
        const checkAuthentication = async () => {
            try {
                const response = await fetch('/verify-token', {
                    method: 'POST',
                    credentials: 'include' // Include cookies in the request
                });
                const data = await response.json();
                setIsAuthenticated(data.authenticated);
            } catch (error) {
                console.error('Error verifying authentication:', error);
            }
        };

        checkAuthentication();
    }, []);

    const login = async (credentials) => {
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
                credentials: 'include' // Include cookies in the request
            });
            const data = await response.json();
            setIsAuthenticated(data.authenticated);
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const logout = async () => {
        try {
            await fetch('/logout', {
                method: 'POST',
                credentials: 'include' // Include cookies in the request
            });
            setIsAuthenticated(false);
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
