import React from "react";
import InputField from "../inputField/InputField";



function Card() {

  return (
    <div className="container py-5 h-100">
      <div className="card" style={{ borderRadius: "15px;" }} >
        <div className="card-body p-5">

          <h6 className="mb-3">Todo List</h6>
          <div>
            <InputField className="d-flex justify-content-center align-items-center mb-4" />
          </div>

        </div>
      </div>
    </div>
  )
}
export default Card;