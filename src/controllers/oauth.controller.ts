import passport from "passport";
import type { Request, Response } from "express";
export function authenticate(){
    passport.authenticate('google');
}

export function callbackAuthenticate(){
    passport.authenticate('/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/failure' }),
  (req: Request, res: Response) => {
    // ✅ If this never runs, your verify callback never called done()
    res.send({ message: 'Google authentication successful', user: req.user });
  })
}

