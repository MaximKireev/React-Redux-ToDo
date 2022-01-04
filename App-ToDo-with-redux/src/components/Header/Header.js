import store from "../store";
import { filterAll, filterDone, filterImportant } from "../actions";

const Header = () => {
    return (
        <div className="header-wrapper" style={{ padding: "0 30px 30px 30px" }}>
            <h3>Filter ToDos: </h3>
            <button onClick={() => store.dispatch(filterAll())}>All</button>
            <button onClick={() => store.dispatch(filterDone())}>Done</button>
            <button onClick={() => store.dispatch(filterImportant())}>
                Important
            </button>
        </div>
    );
};

export default Header;
