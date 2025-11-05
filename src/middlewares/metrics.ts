import type { Request, Response, NextFunction } from "express";
import {
  httpRequestsTotal,
  httpRequestDurationSeconds,
  httpRequestsInProgress,
  httpErrorsTotal,
} from "../metrics/index.js";

export function metricsMiddleware(req: Request, res: Response, next: NextFunction) {
  const end = httpRequestDurationSeconds.startTimer({
    method: req.method,
    route: req.route?.path || req.path,
  });

  httpRequestsInProgress.inc({ method: req.method, route: req.path });

  res.on("finish", () => {
    const labels = {
      method: req.method,
      route: req.route?.path || req.path,
      status_code: res.statusCode,
    };

    httpRequestsTotal.inc(labels);
    end({ status_code: res.statusCode });
    httpRequestsInProgress.dec({ method: req.method, route: req.path });

    if (res.statusCode >= 400) {
      httpErrorsTotal.inc(labels);
    }
  });

  next();
}
