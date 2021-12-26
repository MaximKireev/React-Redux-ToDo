import ToDoItem from "../ToDoItem/ToDoItem";
import { connect } from "react-redux";
import { React, Component } from "react";

class TodosList extends Component {
    render() {
        const { todos } = this.props.data;
        const {filterType } = this.props.data;

        
        return (
            <ul className="listOfTodos">
                {todos.length === 0 ? (
                    <h2>No items to do</h2>
                ) : (
                    filterType !== 'All'?
                   filterItems(todos, filterType).map((item, idx) => <ToDoItem key={idx} item={item} />):
                    todos.map((item, idx) => <ToDoItem key={idx} item={item} />)
                )}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state
    };
};
const filterItems = (todos, filter) => {

switch(filter){
    case 'All':
        return todos;
    case 'Done':
        return todos.filter(item => item.done);
    case 'Important':
        return todos.filter(item => item.important);
    default:
        return todos;
}
}
export default connect(mapStateToProps)(TodosList);
