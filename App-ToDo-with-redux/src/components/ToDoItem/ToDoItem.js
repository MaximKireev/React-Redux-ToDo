import * as actions from "../actions";
import {connect} from 'react-redux'
import { bindActionCreators } from "redux";

const ToDoItem = ({ item, markDone, remTodo, markImp }) => {
    return (
        <li
            className={
                item.done
                    ? "todo-item done"
                    : item.important
                    ? "todo-item important"
                    : "todo-item"
            }
            key={item.id}
        >
            {item.title}
            <div className="control-btns">
                <button className="btn-done" onClick={() => markDone(item.id)}>
                    {item.done ? "Undo" : "Done"}
                </button>
                <button className="btn-del" onClick={() => remTodo(item.id)}>
                    Del
                </button>
                <button className="btn-important" onClick={() => markImp(item.id)}>
                    !!!
                </button>
            </div>
        </li>
    );
};
const mapStateToProps = (state) => {
    return {
        items: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem);
