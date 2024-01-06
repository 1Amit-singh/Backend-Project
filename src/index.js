// require("dotenv").config({ path: "./env" });  This is correct but we'll use import.
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR : ", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server is running on port:", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection failed !!!", err);
  });

/*
import express from "express";
const app = express();

(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error:", error);
      throw error;                                  // This is FIRST approach
    }); 
                                                          
    app.listen(process.env.PORT, () => { 
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();
*/
