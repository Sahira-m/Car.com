import Express from "Express";
import router from "./routes/products";
import routerUser from "./routes/User";
import orderRouter from "./routes/order";
import passport from "passport";
import cors from "cors";

import { JwtStrategys } from "./config/passport";
const app = Express();
app.use(Express.json());
app.use("/products", router);
app.use("/users", routerUser);
app.use("/orders", orderRouter);

app.use(cors());
app.use(passport.initialize());

passport.use(JwtStrategys);
export default app;
