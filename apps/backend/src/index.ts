import express from "express";
import { BACKEND_URL } from "@repo/common/config";

const app = express();
const PORT = 3003;

app.get("/", (req, res) => {
  console.log(BACKEND_URL);
  res.json({ message: "Hello from Express server!!", URL: BACKEND_URL });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
});
