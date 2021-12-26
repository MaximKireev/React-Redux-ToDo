import { addTodo } from "../actions";
import { useState } from "react";
import store from "../store";
import '../ItemAdder/ItemAdder.css'

const ItemAdder = () => {
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
            <button
                className="btn-add"
                onClick={() => {
                    store.dispatch(addTodo(value));
                }}
            >
                +
            </button>
        </form>
    );
};

export default ItemAdder;
