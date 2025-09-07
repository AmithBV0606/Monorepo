import express from "express";

const app = express();
const PORT = 3003;

app.get("/", (req, res) => {
  res.send("Hello from Express server!!");
});

app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
});
