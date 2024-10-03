import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./config/dbConnection.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

// middleware to parse json bodies in requests
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const port = process.env.PORT || 7001;
// start the server
app.listen(port, async () => {
  await dbConnection();
  console.log(`Server is running on port http://localhost:${port}`);
});
