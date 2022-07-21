import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
import app from "./app.js";
import mongoose from "mongoose";

<<<<<<< HEAD
const PORT = process.env.PORT || 3018;
const DB_URL = process.env.DB_URL + process.env.DB_NAME;

=======
const PORT = process.env.PORT || 3018
// const DB_URL = process.env.DB_URL + process.env.DB_COLLECTION;
const DB_URI = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.depssen.mongodb.net/${process.env.DB_COLLECTION}?retryWrites=true&w=majority`;
>>>>>>> a92a2dbd801a75fd6c7c6a6be33dfad6ddc8431f
mongoose
  .connect( process.env.DB_URI)
  .then(() => {
    console.log("database connected");
    app.listen(PORT, () => {
      console.log(`Server is up and running on Port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Erro while connecting" + err);
  });
