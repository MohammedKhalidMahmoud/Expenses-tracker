// Import required modules
import env from "./utils/env-loader.util.js";
console.log("env test", env.SALT_ROUNDS);
import "reflect-metadata";
// import path from "path";
import express from "express"; // Express framework for building the server
import cors from "cors"; // CORS middleware for cross-origin requests
import session from "express-session";
import { metricsMiddleware } from "./middlewares/metrics.js";
// import { bodyParser } from 'body-parser'; // Middleware to parse request bodies
import * as database from './DB/database.js'; // Database configuration and utilities
import { syncTables } from './DB/sync.js'; // Function to synchronize database tables
import globalErrorHandler from './middlewares/global-error-handler.middleware.js'; // Global error handling middleware
import { registerRouteHandlers } from './utils/routes-handler.util.js';
import { configureSwagger } from './swagger/swagger.config.js';
import "./oauth/providers/google.povider.js";
import passport from "passport";
// Load environment variables from .env file
export const app = express(); // Initialize Express application
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());
function bootstrap() {
    configureSwagger(app); // Swagger configuration
    // Apply middleware
    app.use(cors()); // Enable CORS for all routes
    app.use(express.json()); // Parse incoming JSON requests
    app.use(metricsMiddleware);
    // Register route handlers
    registerRouteHandlers(app);
    // Get port from environment variables (default to 4000 if not specified)
    const port = process.env.PORT || 4000;
    app.use(globalErrorHandler);
    // Synchronize database tables (create/modify tables as needed)
    database.tryConnection();
    syncTables();
    // Start the server and listen on the specified port
    app.listen(+port, "0.0.0.0", () => {
        console.log(`Server is running on port ${port}`);
    });
}
bootstrap();
//# sourceMappingURL=server.js.map