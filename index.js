// importing library
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
// const { readdirSync } = require("fs");
const connectWithMongoDB = require("./config/mongo.db.config");
const rootRouters = require("./routes");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

// app
const app = express();

// using middleware
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());

const db_uri = process.env.DATABASE_URI;
const PORT = process.env.PORT || 8000;

// routes
// readdirSync("./routes").map((r) => {
//     app.use("/api", require(`./routes/${r}`));
// });
rootRouters(app);

app.get("/", (req, res) => {
    res.send("E-Commerce-Aladin server is running");
});

app.all("*", (req, res) => {
    res.send("No route found!");
});

process.on("unhandledRejection", (error) => {
    console.log(error.message);
    app.close(() => {
        process.exit(1);
    });
});

// listening the express server
app.listen(PORT, () => {
    connectWithMongoDB(db_uri);
    console.log(`Server Is Running on Port ${PORT}`);
});
