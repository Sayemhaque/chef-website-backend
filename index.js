const express = require("express");
const cors = require("cors");
const PORT = 5000;
const data = require("./data/data.json")
const app = express()
app.use(cors());




app.get("/allchef" , (req,res) => {
    res.send(data)
})

app.get('/chef/:id' , (req,res) => {
    const singleChef = data.find(single => single.id == req.params.id)
    res.send(singleChef)
})

app.listen(PORT , () => {
    console.log(`server is running on http://localhost:${PORT}`)
})


//API URL : https://recipe-app-sayemhaque.vercel.app/allchef