const express = require("express");

const productsRouter = require("./routes/product");
const cartRouter = require("./routes/cart");
const db = require("./config/firebase");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const port = 3001;

app.listen(port, () => {
  console.log(`Server started ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});

app.use(express.json());

app.use("/products", productsRouter);
app.use("/cart", cartRouter);

console.log("Server is starting...");

module.exports = db;
