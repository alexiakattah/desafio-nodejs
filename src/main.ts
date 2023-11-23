import { setup } from "@/main/config/app";

const app = setup();
const PORT = 3333 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
