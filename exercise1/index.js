const express = require("express");

const app = express();

const port = 9000;

app.get("/me", (req, resp) => {
  resp.status(200).json({
    name: "luis",
    age: 28,
    country: "Colombia",
  });
});

app.post("/goals", (req, resp) => {
  resp.status(200).json({
    hobbieOne: "Programar",
    hobbieTwe: "Ver anime",
    hobbieThree: "Jugar",
  });
});

app.patch("/goals", (req, resp) => {
  resp.status(200).json({
    goalOne: "Aprender Node.js",
    goalTwe: "Aprender patrones de diseño y arquitectura de sofware",
  });
});

app.put("/business", (req, resp) => {
  resp.status(200).json({
    companyOne: "Globant",
    companyTwe: "Rappy",
    companyThree: "Mercado Libre",
    companyFour: "Academlo",
  });
});

app.listen(port, () => {
  console.log("server in port: " + port);
});
