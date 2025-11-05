import client, { Registry } from "prom-client";
export const register = new Registry();
// Collect default Node.js metrics (CPU, memory, event loop lag, etc.)
client.collectDefaultMetrics({ register });
// 1️⃣ Counter — total requests
export const httpRequestsTotal = new client.Counter({
    name: "http_requests_total",
    help: "Total number of HTTP requests",
    labelNames: ["method", "route", "status_code"],
});
// 2️⃣ Histogram — request duration (in seconds)
export const httpRequestDurationSeconds = new client.Histogram({
    name: "http_request_duration_seconds",
    help: "Duration of HTTP requests in seconds",
    labelNames: ["method", "route", "status_code"],
    buckets: [0.05, 0.1, 0.2, 0.5, 1, 2, 5], // Adjust as needed
});
// 3️⃣ Gauge — in-progress requests
export const httpRequestsInProgress = new client.Gauge({
    name: "http_requests_in_progress",
    help: "Number of HTTP requests currently being processed",
    labelNames: ["method", "route"],
});
// 4️⃣ Counter — total errors
export const httpErrorsTotal = new client.Counter({
    name: "http_errors_total",
    help: "Total number of HTTP requests that resulted in an error (status >= 400)",
    labelNames: ["method", "route", "status_code"],
});
//# sourceMappingURL=index.js.map