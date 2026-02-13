const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Demo ma'lumotlar
let products = [
  { id: 1, name: "Osh shushu", price: 15000 },
  { id: 2, name: "Osh go'shtli", price: 18000 }
];

let orders = [];

// API endpointlar
app.get("/products", (req, res) => {
  res.json(products);
});

app.post("/orders", (req, res) => {
  const order = req.body;
  order.id = orders.length + 1;
  orders.push(order);
  res.json({ message: "Buyurtma qabul qilindi!", order });
});

app.post("/contact", (req, res) => {
  const contact = req.body;
  console.log("Kontakt formasi:", contact);
  res.json({ message: "Kontakt ma'lumotlari qabul qilindi!" });
});

// Server ishga tushishi
app.listen(PORT, () => {
  console.log(`Server ishga tushdi: http://localhost:${PORT}`);
});