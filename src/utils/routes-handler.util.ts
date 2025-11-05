import express from 'express';
import { userRouter, authRouter, oauthRouter, expensesRouter, categoryRouter, paymentRouter, adminRouter, metricRouter } from '../routes/index.js'; // Importing route handlers

export function registerRouteHandlers(app: express.Application){
    app.use('/api/v1/auth', authRouter);                  // Mount auth routes
    app.use('/api/v1/expenses', expensesRouter);                // Mount expense routes
    app.use('/api/v1/users',userRouter);                // Mount user routes
    app.use('/api/v1/categories', categoryRouter);                // Mount Category routes
    app.use('/api/v1/oauth', oauthRouter);                // Mount OAuth routes
    app.use('/api/v1/payments', paymentRouter);                // Mount payment routes
    app.use('/api/v1/admin', adminRouter);                // Mount admin routes
    app.use('/api/v1/metrics', metricRouter);                // Mount metrics routes
}