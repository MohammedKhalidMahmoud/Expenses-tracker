import client from "prom-client";
export declare const register: client.Registry<"text/plain; version=0.0.4; charset=utf-8">;
export declare const httpRequestsTotal: client.Counter<"method" | "route" | "status_code">;
export declare const httpRequestDurationSeconds: client.Histogram<"method" | "route" | "status_code">;
export declare const httpRequestsInProgress: client.Gauge<"method" | "route">;
export declare const httpErrorsTotal: client.Counter<"method" | "route" | "status_code">;
//# sourceMappingURL=index.d.ts.map