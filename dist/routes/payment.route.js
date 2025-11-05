import express from "express";
import * as paymentController from "../controllers/payment.controller.js";
const paymentRouter = express.Router();
paymentRouter.post('/subscribe/create-checkout-session', paymentController.subscribe);
paymentRouter.get('/success', paymentController.successPayment);
paymentRouter.get('/cancel', paymentController.cancelPayment);
export default paymentRouter;
//# sourceMappingURL=payment.route.js.map