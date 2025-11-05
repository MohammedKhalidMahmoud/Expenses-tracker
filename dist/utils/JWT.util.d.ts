import type JwtUserPayload from "interfaces/jwt-user-payload.js";
export declare function generateToken(secretKey: string, id: string, role: string, email: string, expiresIn: string | number): string;
export declare const verifyToken: (token: string, secretKey: string) => JwtUserPayload;
export declare function revokeTokens(refreshJti: string): Promise<void>;
//# sourceMappingURL=JWT.util.d.ts.map