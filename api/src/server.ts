// connect database here
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();
const port = 8030;
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB__URL as string)
  .then(() => {
    app.listen(port, () => console.log(`app is running on ${port}`));
  })
  .catch((error: Error) => {
    console.log("Some error with connection", error);
    process.exit(1);
  });
