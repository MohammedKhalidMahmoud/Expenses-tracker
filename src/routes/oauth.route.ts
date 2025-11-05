import express from "express";
import type { Request, Response } from "express";
import passport from "passport";

const oauthRouter = express.Router();

// 🔹 Step 1: Redirect user to Google for consent
oauthRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// 🔹 Step 2: Handle Google callback
oauthRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/failure" }),
  (req: Request, res: Response) => {
    console.log("✅ Google callback success", req.user);
    res.json({
      success: true,
      message: "Google authentication successful",
      user: req.user,
    });
  }
);

// Optional: failure route
oauthRouter.get("/auth/failure", (req, res) => {
  res.status(401).json({ success: false, message: "Google authentication failed" });
});

export default oauthRouter;
