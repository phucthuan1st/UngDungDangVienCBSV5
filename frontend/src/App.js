import React, { useContext } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet,
    useLocation,
} from "react-router-dom";
import "./styles/common.css";
import { Helmet } from "react-helmet";
import LoadingSpinner from "./components/LoadingSpinner";
import AppPage from "./pages/AppPage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import { AuthProvider, AuthContext } from "./services/AuthContext";
import DynamicTitle from "./utils/DynamicTitle";
import { routes } from "./constants/routes";

const App = () => {
    const location = useLocation();

    const PrivateWrapper = () => {
        const { isAuthenticated, isLoading } = useContext(AuthContext);

        // If loading, show a loading spinner
        if (isLoading) {
            return <LoadingSpinner />;
        }

        // If authenticated, allow access to the app, otherwise redirect to login
        return isAuthenticated ? (
            <Outlet />
        ) : (
            <Navigate to={routes.LOGIN} replace />
        );
    };

    const LoginPageWrapper = () => {
        const { isAuthenticated, isLoading } = useContext(AuthContext);

        // If loading, show a loading spinner
        if (isLoading) {
            return <LoadingSpinner />;
        }

        // Redirect to app page if user is already authenticated
        return isAuthenticated ? (
            <Navigate to={routes.APP} replace />
        ) : (
            <LoginPage />
        );
    };

    return (
        <AuthProvider>
            <Helmet>
                <title>{DynamicTitle(location.pathname)}</title>
            </Helmet>

            <Routes>
                {/* Route for the login page, redirect to app page if authenticated */}
                <Route path={routes.LOGIN} element={<LoginPageWrapper />} />

                {/* Private wrapper to handle authentication */}
                <Route element={<PrivateWrapper />}>
                    {/* Routes accessible only when authenticated */}
                    <Route path={routes.APP} element={<AppPage />} />
                    <Route path={routes.ERROR} element={<ErrorPage />} />

                    {/* Default redirect for unauthorized routes */}
                    <Route
                        path="*"
                        element={<Navigate to={routes.APP} replace />}
                    />
                </Route>

                {/* Default redirect for unauthenticated users */}
                <Route
                    path="*"
                    element={<Navigate to={routes.LOGIN} replace />}
                />
            </Routes>
        </AuthProvider>
    );
};

export default App;
