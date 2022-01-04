import * as actions from "../actions";
import {connect} from 'react-redux'
import { bindActionCreators } from "redux";
import { Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import '../ToDoItem/ToDoItem.css'


const ToDoItem = ({ item, markDone, remTodo, markImp }) => {
    return (
        < div className = 'li-wrapper' style={item.important? {border: "1px solid red"}: null}>
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
          
           
        </li>
           <ButtonGroup size="small" aria-label="small button group" className="control-btns">
           <Button variant="outlined"
           onClick={() => markDone(item.id)}>{item.done ? "Undo" : "Done"}</Button>
           <Button variant="outlined"
           onClick={() => remTodo(item.id)}>Del</Button>
           <Button variant="outlined"
           onClick={() => markImp(item.id)}>!!!</Button>
           </ButtonGroup>
     
     </div> 
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
