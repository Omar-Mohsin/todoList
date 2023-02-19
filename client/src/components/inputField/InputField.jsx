import React, { useState , useEffect} from "react";
import APIHelper from '../../apiHelper'


import ToDoItem from "../items/ToDoItem";

function InputField() {



    const [inputText, setInputText] = useState("")
    const [items, setItems] = useState([])
   

 
    useEffect(() => {
       
      fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(data => setItems(data));
      }, [])
    
      console.log(items)
      

    function onChangeHandler(event) {
        const newValue = event.target.value;

        setInputText(newValue);
       


    }


    const addItem = async(e)=> {
        
        e.preventDefault()
        if (!inputText) {
          alert("please enter something")
          return
        }
        const newItem = await APIHelper.createItem(inputText)
        setItems([...items, newItem])
    }

    const deleteItem = async (id) => {

        setItems(prevValue => {
            return prevValue.filter((item, index) => {
                return index !== id
            });
        });

      

    }


    return (
        <div>

            <div className="d-flex justify-content-center align-items-center mb-4"    >

                <div className="form-outline flex-fill">

                    <input className="form-control form-control-lg" name="newItem" type='text' onChange={onChangeHandler} placeholder='Add Task' value={inputText}></input>

                </div>

                <button className="btn btn-primary btn-lg ms-2" type="submit" onClick={addItem}>Add</button>
            </div>
            <ul className="list-group mb-0">
                {
                    items.map((item, uid) => (<ToDoItem key={uid} id={uid} text={item} delete={deleteItem} />))
                }
            </ul>
        </div>
    )
}

export default InputField