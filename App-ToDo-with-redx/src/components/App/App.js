import ItemAdder from "../ItemAdder/ItemAdder";
import Header from "../Header/Header";
import TodosList from '../ToDoList/ToDoList'
import '../App/App.css'
import { ThemesContext } from "../context";
import ColoreTheme from '../ColorTheme/ColorTheme'
import React from "react";
import { connect } from "react-redux";


const App = ({currentTheme}) => {
    let theme = React.useContext(ThemesContext);

    return (  

        <div className="app"
        style={currentTheme? theme.dark.AppComponentTheme : theme.light.AppComponentTheme }>
            <ColoreTheme />
            <Header />
            <ItemAdder />
            <TodosList />
        </div>

    );
};

const mapStateToProps = (state) => {
    
    return {currentTheme: state.isThemeDefault}
} 

export default connect(mapStateToProps, null)(App);
