import type IUser from "../interfaces/user.interface";

declare global {
  namespace Express {
    interface User {
      id: string;
      email: string;
      role: string;
    }
  }
}
