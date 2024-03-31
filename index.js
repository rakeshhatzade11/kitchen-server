import express from 'express';

const app = express() ;

const PORT = 5000 ;

app.get("/order/food", (req , res) =>)
res.json({
    message:"order Received Successfully"
})


app.listen(PORT , ()=>{
console.log(`Server is running on Port ${PORT}`)
})