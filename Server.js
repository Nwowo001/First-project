import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/register", (req, res) => {
  const { firstName, surname, email, password } = req.body;

  if (!firstName || !surname || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  console.log({
    firstName,
    surname,
    email,
    password,
  });

  res.status(200).json({ message: "Success! Your account has been created." });
});

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
