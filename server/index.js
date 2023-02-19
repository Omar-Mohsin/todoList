
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const connection = require('./db/mongoConnection')
const Item = require('./db/schema')
const path = require('path');
const app = express();

const port = 3001; 
app.use(cors({
    credentials:true,
    origin: 'http://localhost:3000',    
})) 
app.use(bodyParser.urlencoded({extended:true}))

connection

const item1 = new Item ({
    name : "doing something"
})
const item2 = new Item ({
    name : "doing something 2"
})
const item3 = new Item ({
    name : "doing something 3"
})


const defaultItems = [item1, item2, item3]



app.get('/' , (req,res) =>{
    
    Item.find({} , (error, foundItems)=>{

        if(foundItems.length === 0){
            Item.insertMany(defaultItems,(err)=>{

                if(err){
                    console.log("something wrong in this area")
                } else {
                    console.log("success")
                }
            })
            res.redirect('/')
        } else {
            res.json(foundItems)
            
        }
   
    })
})

app.post ('/' , (req,res)=>{
    const itemName = req.body.name // specify the name of form element in react js files 

    // adding new item to the database when the user click on the add button ---> frontend 
    const item = new Item({
        name : itemName,
    })
    .then(data => res.json(data))
    item.save()
    res.redirect('/')
})                        

app.post('/delete', (req,res)=>{

    //delete item from the database when the user click on the delete button ----> frontend 
    const item = req.body.name; // specify the name of the form element in react js files 



    // add value attr in adding form  ==  value  ={item.id}


    Item.findByIdAndRemove(item , (error)=>{

        if(error){
            console.log(error)
        } else {
            console.log(" is successfully delete an item")
        }

        res.redirect('/');
    })



})


app.listen(port , ()=>{

    console.log(`server is running in port ${port}`)
})