require("dotenv").config();
const express = require("express"); 
const app = express();
const PORT = process.env.PORT;

// 'DATA'
// const fruits = ["apple", "banana", "pear"];
const fruits = [
    {
      name: "apple",
      color: "red",
      readyToEat: true,
    },
    {
      name: "pear",
      color: "green",
      readyToEat: false,
    },
    {
      name: "banana",
      color: "yellow",
      readyToEat: true,
    },
  ];

// ROUTES
// index => shows all the fruits
app.get("/fruits/", (req, res) => {
    res.send(fruits);
  });

// show route => show 1 fruit
// route uses :id => extract using req.params
app.get("/fruits/:id", (req, res) => {
    const pos = req.params.id;
    res.send(fruits[pos]);
  });

app.listen(PORT, () => {
    console.log("app is running on port:", PORT);
  });