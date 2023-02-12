import React, { useState } from "react";
import "../app.scss"

function ToDoItem(props) {


    const [isDone, setIsDone] = useState(false)

    function handleChange(event) {
        const checkedValue = event.target.checked;

        if (checkedValue) {
            setIsDone(true)
        } else {
            setIsDone(false)
        }
    }
    return (

        <li className="list-group-item d-flex d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"  >
            <div className="d-flex align-items-center" style={{ textDecoration: isDone ? "line-through" : "none" }} >
                <input onChange={handleChange} className="form-check-input me-3" type="checkbox" value="" aria-label="..." />
        
                {props.text}
            </div>
            <button id="deleteBtn" onClick={() => { props.delete(props.id) }}>delete</button>



        </li>

    )
}


export default ToDoItem