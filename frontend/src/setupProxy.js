const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/login",
        createProxyMiddleware({
            target: "http://localhost:5000",
            changeOrigin: true,
        }),
    );

    app.use(
        "/logout",
        createProxyMiddleware({
            target: "http://localhost:5000",
            changeOrigin: true,
        }),
    );

    app.use(
        "/verify-token",
        createProxyMiddleware({
            target: "http://localhost:5000",
            changeOrigin: true,
        }),
    );
};
