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
passport.use(JwtStrategys);
app.use("/products", router);
app.use("/users", routerUser);
app.use("/orders", orderRouter);
export default app;
