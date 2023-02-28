// connect database here
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();
const port = 8000;

mongoose.set("strictQuery", false);
/*
mongoose
  .connect(process.env.MONGODB__URL as string)
  .then(() => {
    app.listen(port, () => console.log(`app is running on ${port}`));
  })
  .catch((error: Error) => {
    console.log("Some error with connection", error);
    process.exit(1);
  });
 */

const mongoConection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL as string);
    console.log("db is connected");
  } catch (error) {
    console.log("mongodb connection error " + error);
    process.exit(1);
  }
};
app.listen();
app.listen(port, async () => {
  console.log(`server is running on http://localhost:${port}`);
  await mongoConection();
});
