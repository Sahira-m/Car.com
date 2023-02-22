// jwt passport here
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";
import UserService from "../services/users";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
export const JwtStrategys = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },

  async (payload: any, done: any) => {
    //payload-- body
    //body-- go to controller
    const email = payload.email;
    const foundUser = await UserService.getUserByEmail(email);
    if (!foundUser) {
      return "no user";
    }
    done(null, foundUser);
  }
);
