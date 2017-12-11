const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const mainCtrl = require("./MainCtrl");

const port = 3001;

const app = express();

app.use(json());
app.use(cors());

app.get('/pullnews', mainCtrl.pullNews);
app.post("/searchByKeyword", mainCtrl.searchByKeyword);


app.listen(port, () => {
    console.log(`Listening on port Beck: ${port}`);
})