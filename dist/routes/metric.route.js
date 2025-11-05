import express from "express";
import * as metricController from "../controllers/metric.controller.js";
const metricRouter = express.Router();
metricRouter.get('', metricController.getMetrics);
export default metricRouter;
//# sourceMappingURL=metric.route.js.map