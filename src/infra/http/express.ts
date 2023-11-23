import express, { Application } from "express";

const app: Application = express();
const PORT = 3333;
app.use(express.json());

// app.get("/", ExpressAdapter.adapt());

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
