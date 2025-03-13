import { IUser } from "../models/user-model.ts";

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}

// Eksport pusty aby plik był traktowany jako moduł
export {};
