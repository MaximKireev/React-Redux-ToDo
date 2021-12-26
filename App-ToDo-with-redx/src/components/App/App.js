import ItemAdder from "../ItemAdder/ItemAdder";
import Header from "../Header/Header";
import TodosList from '../ToDoList/ToDoList'
import '../App/App.css'

const App = () => {
    return (
        <div className="app">
            <Header />
            <ItemAdder />
            <TodosList />
        </div>
    );
};
export default App;
