import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.json("hi").status(200);
});


const PORT = 3001;
app.listen(PORT, () => {
    console.log(`express listen ${PORT}`);
})