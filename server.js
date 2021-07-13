require("dotenv").config();
const express = require("express"); 
const app = express();
const PORT = process.env.PORT;

// 'DATA'
// const fruits = ["apple", "banana", "pear"];
/* const fruits = [
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
  ]; */

// const superheroes = ['Superman', 'Wonder Woman', 'Black Panther' ];

const superheroes = [
  {
    name: "Superman",
    powers: ['flight', 'invulnerability', 'x-ray vision']
  },
  {
    name: "Wonder Woman",
    powers: ['super strength', 'invulnerability']
  },
  {
    name: "Black Panther",
    powers: ['super strength', 'invulnerability', 'super agility']
  },
];

const supervillians = [
  {
   name: "Lex Luthor", 
   powers: ["super brain"]
  },
  {
   name: "Ares", 
   powers: ["shape shifting", "teleporting"]
   },
   {
    name: "Killmonger", 
    powers: ["ability to fit in Black Panther's suit", "internet agreement that he looks badass"]
   }
]

// ROUTES
// index => shows all the superheroes
app.get("/superheroes", (req, res) => {
    res.send(superheroes);
  });

/*   app.get("/supervillians", (req, res) => {
    res.send(supervillians);
  }); */

// show route => show 1 fruit
// route uses :id => extract using req.params
/* app.get("/superheroes/:index", (req, res) => {
    const pos = req.params.id;
    res.send(fruits[pos]);
  }); */

/* app.get("/superheroes/:index", (req, res) => {
    const pos = req.params.index;
    res.send(superheroes[pos]);
  }); */


/*   app.get("/superheroes/:index", (req, res) => {
    const pos = req.params.index;
    res.send(`<h1>${superheroes[pos].name}</h1>
        <ul>
        <li>${superheroes[pos].powers[0]}
        </li>
        <li>${superheroes[pos].powers[1]}
        </li>
        <ul>
    
    `);
  }); */

  app.get("/superheroes/:index", (req, res) => {
    const pos = req.params.index;
    res.send(`<h1>${superheroes[pos].name}</h1>
        <ul>
        ${superheroes[pos].powers.map((item) => `<li>${item}</li>`).join(" ")}
        <li>Nemesis: ${supervillians[pos].name}</li>
        </ul>
    
    `);
  });


app.listen(PORT, () => {
    console.log("app is running on port:", PORT);
  });