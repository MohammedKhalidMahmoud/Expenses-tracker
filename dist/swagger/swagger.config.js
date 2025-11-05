import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
export function configureSwagger(app) {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    // Load YAMLs
    const info = YAML.load(path.resolve(__dirname, "./swagger.info.yaml"));
    const baseSchemas = YAML.load(path.resolve(__dirname, "./base.schemas.yaml"));
    const authSchemas = YAML.load(path.resolve(__dirname, "./auth/auth.schemas.yaml"));
    const oauthSchemas = YAML.load(path.resolve(__dirname, "./oauth/oauth.schemas.yaml"));
    const userSchemas = YAML.load(path.resolve(__dirname, "./user/user.schemas.yaml"));
    const expenseSchemas = YAML.load(path.resolve(__dirname, "./expense/expense.schemas.yaml"));
    const categorySchemas = YAML.load(path.resolve(__dirname, "./category/category.schemas.yaml"));
    const adminSchemas = YAML.load(path.resolve(__dirname, "./admin/admin.schemas.yaml"));
    const subscriptionSchemas = YAML.load(path.resolve(__dirname, "./subscription/subscription.schemas.yaml"));
    const metricsSchemas = YAML.load(path.resolve(__dirname, "./metrics/metrics.schemas.yaml"));
    const authPaths = YAML.load(path.resolve(__dirname, "./auth/auth.paths.yaml"));
    const oauthPaths = YAML.load(path.resolve(__dirname, "./oauth/oauth.paths.yaml"));
    const userPaths = YAML.load(path.resolve(__dirname, "./user/user.paths.yaml"));
    const expensePaths = YAML.load(path.resolve(__dirname, "./expense/expense.paths.yaml"));
    const categoryPaths = YAML.load(path.resolve(__dirname, "./category/category.paths.yaml"));
    const adminPaths = YAML.load(path.resolve(__dirname, "./admin/admin.paths.yaml"));
    const subscriptionPaths = YAML.load(path.resolve(__dirname, "./subscription/subscription.paths.yaml"));
    const metricsPaths = YAML.load(path.resolve(__dirname, "./metrics/metrics.paths.yaml"));
    const swaggerDefinition = {
        ...info,
        components: {
            schemas: {
                ...baseSchemas,
                ...authSchemas,
                ...userSchemas,
                ...expenseSchemas,
                ...categorySchemas,
                ...adminSchemas,
                ...oauthSchemas,
                ...subscriptionSchemas,
                ...metricsSchemas
            },
            securitySchemes: info.securitySchemes || {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        paths: {
            ...authPaths,
            ...userPaths,
            ...expensePaths,
            ...categoryPaths,
            ...adminPaths,
            ...oauthPaths,
            ...subscriptionPaths,
            ...metricsPaths
        },
    };
    const swaggerOptions = {
        definition: swaggerDefinition,
        apis: [],
    };
    const swaggerSpec = swaggerJSDoc(swaggerOptions);
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
//# sourceMappingURL=swagger.config.js.map