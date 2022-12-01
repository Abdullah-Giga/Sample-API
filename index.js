import express, { json } from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";

// Initializing the app

const app = express();
// Setting up a basic express server

const PORT = 5000;

// Initializing the body parser middlewere

app.use(bodyParser.json());

// Making our app listen for incomming requests
app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);

app.use("/users", userRoutes);
