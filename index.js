const express=require('express')

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const PORT=process.env.PORT||4000;

app.get("/", (req, res) => {
    res.status(200).json("Hello world new");
  });
  
module.exports = app.listen(PORT, () =>
    console.log(`Running on port ${PORT}`)
  );