import express from "express";
import { monsterSchema } from "./zodSchemas/monsterSchema.js";
import { connectToDB } from "./database/connectToDB.js";
import { Monster } from "./database/models/monsterModel.js";

const app = express();
const port = 3000;

connectToDB();

//testdata
const monsters = [
  {
    name: "Shadowfang",
    age: 150,
  description: "A mysterious creature that thrives in darkness and shadows.",
    horns: 2,
    legs: 4,
    color: "black",
    likes: ["dark caves", "nighttime", "hunting silently"],
    dislikes: ["bright light", "noisy environments"], 
  },
  {
    name: "Crystalclaw",
    age: 75,
    description: "A shimmering creature with crystalline claws and scales.",
    horns: 1,
    legs: 6,
    color: "iridescent blue",
    likes: ["gems", "shimmering lights", "deep caverns"],
    dislikes: ["dust", "dull objects", "crowded spaces"], 
  },
];

app.use(express.json());

//hämta alla monster
app.get("/", async (req, res) => {
 try {
  const monsters = await Monster.find(); // Hämta alla monster från MongoDB
  res.status(200).json(monsters); // Skicka tillbaka monsters som JSON
 } catch (error) {
  res.status(500).json({ message: "Failed to fetch monsters", error: err });
 }
});

// POST-rutt för att lägga till ett nytt monster i MongoDB
app.post("/", async (req, res) => {
  // Validera inkommande data med Zod-schemat
  const result = monsterSchema.safeParse(req.body);

  if (result.success) {
    try {
      // Skapa och spara det nya monstret i databasen
      const newMonster = new Monster(result.data);
      await newMonster.save(); // Spara i MongoDB

      res.status(201).json({
        message: "Monster saved to database!",
        data: result.data,
      });
    } catch (err) {
      res.status(500).json({ message: "Failed to save monster", error: err });
    }
  } else {
    res.status(400).json({
      message: "Validation error",
      errors: result.error.errors,
    });
  }
});

app.listen(port, () => {
  console.log(`Port is running on ${port}`);
});
