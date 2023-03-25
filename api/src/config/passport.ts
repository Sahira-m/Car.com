// jwt passport here
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";
import UserService from "../services/users";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;
export const JwtStrategys = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },

  async (payload: any, done: any) => {
    //payload-- body
    //body-- go to controller
    const email = payload.email;
    console.log("email is", email);
    const foundUser = await UserService.getUserByEmail(email);
    console.log("user is", foundUser);
    if (!foundUser) {
      return "no user";
    }
    done(null, foundUser);
  }
);

/* import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";

import UserServices from "../services/users";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;
export const JwtStrategys = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload, done) => {
    const email = payload.email;
    const userExists = await UserServices.getUserByEmail(email);
    if (!userExists) {
      return "No user";
    }
    done(null, userExists);
  }
);
 */
