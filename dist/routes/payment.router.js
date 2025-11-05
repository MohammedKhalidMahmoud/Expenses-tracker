import express from "express";
import * as paymentController from "../controllers/payment.controller.js";
const paymentRouter = express();
paymentRouter.post('/checkout-session', paymentController.pay);
export default paymentRouter;
//# sourceMappingURL=payment.router.js.map