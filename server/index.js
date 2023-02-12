const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(cors())


mongoose.connect('mongodb+srv://test:test@todo.uikmolv.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true , useUnifiedTopology: true });

const itemSchema = new mongoose.Schema({
  todo:{
    type : String,
    required : true
} , 
});

const Item = mongoose.model('Item', itemSchema);

app.post('/task', (req, res) => {
  const items = req.body;

  Item.insertMany(items, (error, result) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
      return;
    }

    console.log('Items saved successfully');
    
  });
  items.save()
});

app.get('/task', (req, res) => {
  Item.find({}, (error, items) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
      return;
    }


    console.log('Items retrieved successfully');
    res.send(items);
  });
});

app.listen(3001, () => {
  console.log('Server started on port 3000');
});