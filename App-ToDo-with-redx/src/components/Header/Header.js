import store from "../store";
import { filterAll, filterDone, filterImportant } from "../actions";
import '../Header/Header.css'

const Header = () => {
    return (
        <div className="header-wrapper">
            <a
            className="sortAll"
             onClick={() => store.dispatch(filterAll())}>All</a>
            <a
            className="sortDone"
             onClick={() => store.dispatch(filterDone())}>Done</a>
            <a
            className="sortImportant"
             onClick={() => store.dispatch(filterImportant())}>
                Important
            </a>
        </div>
    );
};

export default Header;
