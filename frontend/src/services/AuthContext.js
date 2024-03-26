import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const checkAuthentication = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setIsAuthenticated(false);
                setIsLoading(false);
                return;
            }

            const response = await fetch('/verify-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token }),
            });

            if (!response.ok) {
                const error = Error(`HTTP error! status: ${response.status}`);
                error.statusCode = response.status;
                throw error;
            }

            const data = await response.json();
            setIsAuthenticated(data.authenticated);
        } catch (error) {
            console.error('Error verifying authentication:', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        checkAuthentication();
    }, []);

    const login = async (credentials) => {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            const error = Error(`HTTP error! status: ${response.status}`);
            error.statusCode = response.status;
            throw error;
        }

        const data = await response.json();
        if (data.authenticated) {
            localStorage.setItem('token', data.token);
            await checkAuthentication();
        }
    };

    const logout = async () => {
        try {
            localStorage.removeItem('token'); // Remove token from localStorage
            setIsAuthenticated(false);
            const response = await fetch('/logout', {
                method: 'POST',
            });

            if (!response.ok) {
                const error = Error(`HTTP error! status: ${response.status}`);
                error.statusCode = response.status;
                throw error;
            }

        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
