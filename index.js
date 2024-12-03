import express from 'express'
import dotenv from 'dotenv'
import { productRoutes } from './routes/productRoutes.js';
import comments from './comments.js';
const app = express();
// dotenv.config()



app.get('/',(req,res)=>{
    res.status(200).send("Welcome")
})

app.use('/products',productRoutes)
// app.get('/users/:id',(req,res)=>{
//     const id = req.params.id;
//     res.status(200).send(`Welcome to my product ${id}`)
// })

// app.get('*',(req,res)=>{
//     res.status(404).send('Page not found')
// })








const PORT = 7000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})