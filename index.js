const express = require("express");
const cors = require("cors");
const PORT = 5000;

const app = express()
app.use(cors());




app.get("/allchef" , (req,res) => {
    res.send({data:"sayem"})
})



app.listen(PORT , () => {
    console.log(`server is running on http://localhost:${PORT}`)
})