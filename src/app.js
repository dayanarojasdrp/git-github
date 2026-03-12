function greet(name) {
  return ` Hello, ${name}. This is the main app file.`;
}

console.log(greet("Dayana"));
import express from "express";
const app = express();

app.use("/assets", express.static("assets"));

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});
