import React from "react";
import { useState } from "react";
import store from '../store'
import {addTodo} from '../actions'
import '../AddNewItem/AddNewItem.css'

const AddNewItem = () => {

    let [value, setValue] = useState("");

    const onInputChange = (event) => {
        setValue(event.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
           
        <form className="formAdd" onSubmit={onSubmit}>
            <input
            className="inputItemAdder"
                type="text"
                value={value}
                placeholder="Add ToDo item here"
                onChange={onInputChange}
            />
           {/* <button
                className="btn-add"
                onClick={() => {
                    store.dispatch(addTodo(value));
                }}
            >
                +
            </button> */}
        </form>
       
    );
}

export default AddNewItem