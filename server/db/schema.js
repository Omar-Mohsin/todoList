const mongoose =  require('mongoose')
const itemsSchema = {
    name: String
  };
  
  const Item = mongoose.model("Item", itemsSchema);


  module.exports = Item;