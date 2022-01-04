import React from "react";

let themes = {
    dark:{
        mainTheme: {
            backgroundColor: "#E54980"
        },
        AppComponentTheme: {backgroundColor: "#353A40",
        color: "#EFF2F6",
        textDecoration: "none",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",}
        
    },
    light: {
        mainTheme: {
            backgroundColor: "#DCE0E8"
        },
        AppComponentTheme: {
            backgroundColor: "#F4F5F7",
            color: "black",
            textDecoration: "none",
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }
    }
  
}

const ThemesContext = React.createContext(themes);

export {
        ThemesContext,
        themes};