// src/interfaces/jwt-payload.interface.ts
export default interface JwtUserPayload {
  id: string;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
  JWI: string
}
