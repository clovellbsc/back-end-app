import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token =
      req.header && req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.sendStatus(400);
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
    (req as CustomRequest).token = decoded;

    next();
  } catch (err) {
    res.status(401).send("Please authenticate");
  }
};
