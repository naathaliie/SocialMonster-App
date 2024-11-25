import express from "express";
import { monsterSchema } from "./zodSchemas/monsterSchema.js";

const app = express();
const port = 3000;

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
app.get("/", (req, res) => {
  res.send(monsters);
});

//lägg till monster
app.post("/", (req, res) => {

  //Använd safeParse för att validera indatan
  const result = monsterSchema.safeParse(req.body);

  if (result.success) {
    //Om valideringen lyckades, lägg till den nya resursen i monster-arrayen
    monsters.push(result.data)

    //Ge tillbaka (visa i ThunderClient) resursen med status 201
    res.status(201).json({
      message: "Datan var giltig och är nu sparad!",
      data: result.data,
    });
  } else {
    //Om valideringen misslyckades, skicka en 400-status med felmeddelandet
    res.status(400).json({
      message: "Valideringsfel vid POST",
      errors: result.error.errors //Detta innehåller specifika felmeddelanden från zod
    });
  };
});

app.listen(port, () => {
  console.log(`Port is running on ${port}`);
});
