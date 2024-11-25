import express from "express";

const app = express();
const port = 3000;

//testdata
const testData = [
  {
    monster: "monster1",
    age: 12,
  },
  {
    monster: "monster2",
    age: 7,
  },
];

app.use(express.json());

//hämta alla monster
app.get("/", (req, res) => {
  res.send(testData);
});

//lägg till monster
app.post("/", (req, res) => {
  //skapa nu resurs
  const newMonster = req.body;

  //Lagra den nya resursen
  testData.push(newMonster);

  //Ge tillbaka den nya resursen
  res.status(201);
  res.send(newMonster);
});

app.listen(port, () => {
  console.log(`Port is running on ${port}`);
});
