const connectDb = require("./config/db");
const express = require('express');
const dotenv = require('dotenv').config();
//const connection = require('./config/mysqldb')
const cors = require('cors');
const multer = require('multer');
const router = express.Router();
const port = process.env.PORT || 8080;
var app = express();
const errorHandler = require('./middlewares/errorHandler')
const path = require('path');

//routes
const commonRoute = require ('./routes/commonRoute');
const contactRoute = require ('./routes/contactRoute');
const mailRoute = require('./routes/mailRoute')
const productRoute = require('./routes/productRoute')
//const feedbackRoute = require('./routes/feedbackRoute')
const adminRoute = require('./routes/adminRoute')

//swagger
const swaggerUI = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerDocs = require("./swagger.json")

//middlewares
app.use(errorHandler)
//app.use(express.static('public'));
app.get('/',(req,res)=>{
  console.log('backend started')
  res.send('Hello World!');
 // res.sendFile(path.join(__dirname,'public/index.html'));
})
app.use('/api-docs/bansal',swaggerUI.serve,swaggerUI.setup(swaggerDocs));
app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", parameterLimit: 500000000, extended:true }));
app.use(cors({origin:'*',credentials:true}));

//static image for user
app.use('/uploads', express.static('Storage/images'));
app.use('/', commonRoute);
app.use('/mail', mailRoute);
app.use('/contact', contactRoute);
app.use('/product',productRoute);
//app.use('/feedback',feedbackRoute);
app.use('/admin',adminRoute);

//multer error handling
app.use((err,req,res,next) => {
  // multer errors
  if(err instanceof multer.MulterError){
    return res.status(418).json({err_code: 418, err_message: err.message})
  }else{
    //other application errors
    return res.status(500).json({err_code: 500, err_message: "Something went wrong"})
  }
})

//undefined User Route
app.use('*',(req, res)=>{
  res.status(404).json({status:'failed', data : "Not found"})
})



//connection to db
connectDb();

//connection to server
app.listen(port,()=>{
    console.log(`server started at port ${port}`)
  //   connection.connect(function(err){
  //     if(err) throw err;
  //     console.log('Database connected!');
  // })
});
