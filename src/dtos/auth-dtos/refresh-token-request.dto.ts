import { IsJWT, IsString } from "class-validator";

export default class RefreshTokenRequest{
    

    @IsString()
    @IsJWT()
    refreshToken!: string

    
}