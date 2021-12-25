import ItemAdder from "../ItemAdder/ItemAdder";
import Header from "../Header/Header";
import '../ToDoList/ToDoList'

const App = () => {
    return (
        <div className="App">
            <Header />
            <ItemAdder />
            <TodosList />
        </div>
    );
};
export default App;
