const express = require("express");

const app = express();
const port = 8000;

app.get("/", (req, resp) => {
  resp.status(200).json({ message: "Hola" });
});

app.post("/", (req, resp) => {
  resp.status(200).json({ message: "Hola" });
});

app.listen(port, () => {
  console.log("server started at port " + port);
});

/* 
const express = require("express");

const app = express();

app.post('/', (request, response) => {
    response.status(200).json({
        message: 'Haciendo una peticion tipo post',
        verb: request.method
    })
})

app.put('/', (request, response) => {
    response.status(200).json({
        message: 'hola estoy haciendo un put',
        verb: request.method
    })
})

app.listen(8000, () => {
    console.log('Server started at port 8000')
})

*/
