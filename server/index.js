const { REFUSED } = require('dns');
const express = require('express');
const app = express();
//var cors = require('cors')

//app.use(cors); /* NEW */



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });





const mysql = require('mysql');


const SELECT_ALL_CATEGORIES = 'SELECT CATAGORY FROM PRODUCTS GROUP BY CATAGORY';
const SELECT_SUBCATEGORY_FOR_CATEGORIES = 'SELECT SUB_CATAGORY FROM PRODUCTS GROUP BY SUB_CATAGORY';

var connection_pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'rdms_project'
});


//console.log(connection);

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
    
]

//these are called route
app.get('/',function(req, res){
    res.send('Hellow Damn i am using Node and Express');
});

app.get('/api/courses',(req,res)=>{
    res.send(courses);
});

app.get('/api/allcategory',(req,res)=>{

    

    connection_pool.getConnection(function(err,connection){

        if(err)
        {
            return res.send(err);
        }

        connection.query(SELECT_ALL_CATEGORIES,(err2,results) =>{
            if(err2){
                console.log('Query Problem');
                return res.send(err2)
            }
    
            else{
                return res.send(results)
                   
                
            }

            
        });
        connection.release();
    });
        
    
});


app.get('/api/subcategory/:category',(req,res)=>{

   // const course = courses.find(c=>
 //           c.id === parseInt(req.params.id));

  //  if(!course) res.status(404).send('Course not found');
 //   res.send(course);

 connection_pool.getConnection(function(err,connection){

    if(err)
    {
        return res.send(err);
    }

    connection.query("SELECT SUB_CATAGORY FROM PRODUCTS WHERE CATAGORY="+"\'"+req.params.category+"\'"+" GROUP BY SUB_CATAGORY",(err2,results) =>{
        if(err2){
            console.log('Query Problem');
            return res.send(err2)
        }

        else{
            return res.send(results)
               
            
        }

        
    });
    connection.release();
});

});

app.get('/api/brand/:category/:subcategory',(req,res)=>{

    // const course = courses.find(c=>
  //           c.id === parseInt(req.params.id));
 
   //  if(!course) res.status(404).send('Course not found');
  //   res.send(course);
 
  connection_pool.getConnection(function(err,connection){
 
     if(err)
     {
         return res.send(err);
     }
 
     connection.query("SELECT BRAND_NAME FROM PRODUCTS WHERE CATAGORY="+"\'"+req.params.category+"\'"+" AND SUB_CATAGORY="+"\'"
     +req.params.subcategory+"\'"+" GROUP BY BRAND_NAME",(err2,results) =>{
         if(err2){
             console.log('Query Problem');
             return res.send(err2)
         }
 
         else{
             return res.send(results)
                
             
         }
 
         
     });
     connection.release();
 });
 
 });

app.get('/api/courses/:id/:name',(req,res)=>{

    //query paparmeters
    res.send(req.query);
    // we can use query parameters to sort or different query on id and name
    // query parameter is optional


    //normal parameters
    //res.send(req.params);
    // you can only send one time
    //res.send(req.params.id);
   // res.send(req.params.name);
});


// port can not be always 3000 
// so we have to use a environment veriable
// process global object
// to set the port on command prompt 
// use the command 
// $env:PORT=Value of the port number

const port  = process.env.PORT || 4000;

app.listen(port,function()
{
    console.log(`Lisntening on port ${port}.....`);
});

// commands for adding express framework 
// npm init --yes
// npm i express

// install nodemon or node monitor