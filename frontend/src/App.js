import React, {useContext} from 'react';
import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import AppPage from "./pages/AppPage";
import  ErrorPage from "./pages/ErrorPage";
import { AuthProvider, AuthContext } from './services/AuthContext';

const App = () => {
    const PrivateWrapper = () => {
        const { isAuthenticated } = useContext(AuthContext);

        return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
    };

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route element={<PrivateWrapper />}>
                        <Route path="/app" element={<AppPage />} />
                        <Route path="/error" element={<ErrorPage />} />
                        <Route path="*" element={<Navigate to="/app" />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App;