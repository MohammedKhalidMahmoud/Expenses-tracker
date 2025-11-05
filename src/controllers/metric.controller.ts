import type { Request, Response } from "express";
import client from "prom-client";

export async function getMetrics(req: Request, res: Response) {
  try {
    console.log("metrics check point#1");

    // Set correct Content-Type
    res.set("Content-Type", client.register.contentType);

    // Collect and send metrics
    const metrics = await client.register.metrics();
    console.log("metrics check point#2");
    res.end(metrics);
  } catch (err) {
    console.error("Error generating metrics:", err);
    res.status(500).end();
  }
}
