import express from 'express';
import dotenv from 'dotenv';
import validationResult, { registerVallidator } from './middleware/from.middleware.js';
dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST  || '127.0.0.1';
//middleware
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('Form')
})

app.post('/register',registerVallidator,(req,res)=>{
   const result = validationResult(req);
   if(result.isEmpty()){
     res.send(req.body)
   }else{
      res.render("Form", {error : result.array()})
   }
})


app.listen(port,hostname,()=>{
    console.log(`Server is running at http://${hostname}:${port}/`)
})