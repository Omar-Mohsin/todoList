import React, { useState } from "react";


import ToDoItem from "../items/ToDoItem";

function InputField() {


    const url = "http://localhost:3001/task"
    const [inputText, setInputText] = useState("")
    const [items, setItems] = useState([])
   


    function onChangeHandler(event) {
        const newValue = event.target.value;

        setInputText(newValue);
       


    }


    const addItem = async(data)=> {
        setItems(prevValue => {
            return [...prevValue, inputText]
        })
       

       
        // Send the new todo item to the back-end
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify( inputText )
        })
          .then(res => res.json())
     
          setInputText("");
     
   
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

            <div className="d-flex justify-content-center align-items-center mb-4">

                <div className="form-outline flex-fill">

                    <input className="form-control form-control-lg" type='text' onChange={onChangeHandler} placeholder='Add Task' value={inputText}></input>

                </div>

                <button className="btn btn-primary btn-lg ms-2" onClick={addItem}>Add</button>
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