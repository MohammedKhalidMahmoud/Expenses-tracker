// import { redisClient } from '../config/redis.config';
import jwt from "jsonwebtoken";
// import type IUser from '../interfaces/user.interface';
import { v4 as uuidv4 } from "uuid";
import { redisClient } from "../config/redis.config.js";
const jwtLib = jwt;
// utility function to generaimport { SignOptions } from 'jsonwebtoken';
// import { generateToken } from './../../dist/utils/JWT.util';
export function generateToken(secretKey, id, role, email, expiresIn) {
    if (!secretKey || !id || !role || !email || !expiresIn)
        throw new Error("token generation arguments missing");
    const JWI = uuidv4();
    const signOptions = { expiresIn: expiresIn };
    return jwtLib.sign({ JWI, id, role, email }, secretKey, signOptions // Token expires in 1 hour
    );
}
// export async function issueRefreshToken(id, role, email, expiresIn) {
//   const tokenId = uuidv4();
//   // Store in Redis
//   await redisClient.set(`refreshToken:${tokenId}`, userId, {
//     EX: 7 * 24 * 60 * 60, // 7 days
//   });
//   // Sign JWT with tokenId
//   const refreshToken = generateToken(id, role, email, expiresIn);
//   return refreshToken;
// }
// utility function to verify tokens
export const verifyToken = (token, secretKey) => {
    // const secretKey= process.env.ACCESS_TOKEN_SECRET;
    console.log("token", token);
    console.log("secretKey", secretKey);
    if (!secretKey)
        throw new Error("secret key is missing");
    try {
        const decoded = jwt.verify(token, secretKey);
        console.log("decoded", decoded);
        return decoded;
    }
    catch (error) {
        if (error instanceof jwt.TokenExpiredError)
            throw new Error("Expired token");
        else
            throw new Error("Invalid token");
    }
};
// export const verifyRefreshToken = (token: string ): JwtPayload => {
//   const secretKey= process.env.REFRESH_TOKEN_SECRET;
//   if(!secretKey) throw new Error ("secret key is missing");
//   try{
//     const decoded = jwt.verify(token, secretKey);
//     return  decoded as JwtPayload;
//   }
//   catch(error){
//     if(error instanceof jwt.TokenExpiredError)
//       throw new Error("Expired token")
//     else{
//       console.log(error);
//       throw new Error("Invalid token") ;
//     }
//   }
// };
export async function revokeTokens(refreshJti) {
    // Access token: 1 hour
    // await redisClient.set(`revoked:access:${accessJti}`, "true", {EX: 3600});
    // Refresh token: 2 days
    await redisClient.set(`revoked:refresh:${refreshJti}`, "true", { EX: 172800 });
}
//# sourceMappingURL=JWT.util.js.map