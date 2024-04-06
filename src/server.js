import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/api/jokes", (req, res) => {
  res.json([
    {
      color: "red",
      value: "#f00",
    },
    {
      color: "green",
      value: "#0f0",
    },
    {
      color: "blue",
      value: "#00f",
    },
    {
      color: "cyan",
      value: "#0ff",
    },
    {
      color: "magenta",
      value: "#f0f",
    },
    {
      color: "yellow",
      value: "#ff0",
    },
    {
      color: "black",
      value: "#000",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Goal tracker backend listening on port ${port}`);
});
