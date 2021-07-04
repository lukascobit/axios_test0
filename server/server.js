const express = require("express");
const app = express();
const path = require("path")

app.use(express.json());
app.use(express.urlencoded({extended: false}))  


app.get("/", (req, res)=>{
    res.send("hello")
});

var port = process.env.PORT || 4000

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})