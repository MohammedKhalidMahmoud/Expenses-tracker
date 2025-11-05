import { IsJWT } from "class-validator";


export default class RefreshTokenResponse{
    
    @IsJWT()
    accessToken: string;

    @IsJWT()
    refreshToken: string
}