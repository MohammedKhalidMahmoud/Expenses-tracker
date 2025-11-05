declare module 'passport-google-oidc' {
  import { Strategy as PassportStrategy } from 'passport-strategy';
  import { Request } from 'express';

  interface StrategyOptions {
    clientID: string;
    clientSecret: string;
    callbackURL: string;
    passReqToCallback?: boolean;
  }

  interface Profile {
    id: string;
    displayName: string;
    name?: {
      familyName?: string;
      givenName?: string;
    };
    emails?: Array<{ value: string }>;
    photos?: Array<{ value: string }>;
    provider: string;
    _raw?: string;
    _json?: any;
  }

  type VerifyCallback = (error: any, user?: any, info?: any) => void;

  interface VerifyFunction {
    (issuer: string, profile: Profile, done: VerifyCallback): void;
  }

  interface VerifyFunctionWithRequest {
    (req: Request, issuer: string, profile: Profile, done: VerifyCallback): void;
  }

  class Strategy extends PassportStrategy {
    constructor(options: StrategyOptions, verify: VerifyFunction);
    constructor(options: StrategyOptions & { passReqToCallback: true }, verify: VerifyFunctionWithRequest);
    name: string;
  }

  export default Strategy;
}
