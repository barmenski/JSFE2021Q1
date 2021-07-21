/* eslint-disable no-console */
import path from "path";
import express from "express";

import bodyParser from "body-parser";
import cors from "cors";
import categories from "./category/router";
import items from "./cards/router";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const publicPath = path.resolve(__dirname, "../src/wwwroot");
const indexPath = path.resolve(__dirname, "../src/wwwroot/index.html");

// if query not starts with '/api/' string - send file from wwwroot
app.use(/^(?!\/api\/)/, express.static(publicPath));
// if file doesn't exists - send index.html
app.use(/^(?!\/api\/)/, (req, res) => {
  res.sendFile(indexPath);
});
app.use("/api/category", categories); //загрузили модуль маршрутизации categories из ./category/router
app.use("/api/cards", items); //загрузили модуль маршрутизации items из ./item/router

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
