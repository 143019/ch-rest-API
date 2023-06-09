const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
port = process.env.port|| 4500

mongoose.set("strictQuery", false);

//connecting to database
mongoose.connect('mongodb+srv://abidjamila43:123@cluster0.ilidllc.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

//let server accept json
app.use(express.json());

//router
const usersRouter = require("./routes/userRouters");
app.use("/users", usersRouter);

app.listen(port, () => console.log(`the server starter on port ${port}`));
