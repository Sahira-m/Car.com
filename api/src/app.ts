import Express from "Express";
import passport from "passport";
import cors from "cors";
//3 routes
import router from "./routes/products";
import routerUser from "./routes/User";
import orderRouter from "./routes/order";
// passport JWTStrategy
import { JwtStrategys } from "./config/passport";
const app = Express();
app.use(Express.json());
app.use(cors());
app.use(passport.initialize());
app.use("/products", router);
app.use("/users", routerUser);
app.use("/orders", orderRouter);
passport.use(JwtStrategys);
export default app;
