const express=require('express')

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const PORT=process.env.PORT||4000;

app.get("/", (req, res) => {
    res.status(200).json("Hello world new");
  });
app.get("/about", (req, res) => {
    res.status(200).json("<h3>About Page</h3>");
  });
  
module.exports = app.listen(PORT, () =>
    console.log(`Running on port ${PORT}`)
  );