const express = require("express");
const app = express();

app.use(express.json());

let users = []; 

app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json({ message: "User created", user });
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  users[id] = req.body;
  res.json({ message: "User updated", user: users[id] });
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  users.splice(id, 1);
  res.json({ message: "User deleted" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});