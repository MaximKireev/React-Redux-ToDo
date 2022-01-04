import ToDoItem from "../ToDoItem/ToDoItem";
import { connect } from "react-redux";
import { React, Component } from "react";

class TodosList extends Component {
    render() {
        const { todos } = this.props.data;
        return (
            <ul className="listOfTodos">
                {todos.length === 0 ? (
                    <h2>No items to do</h2>
                ) : (
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
export default connect(mapStateToProps)(TodosList);
