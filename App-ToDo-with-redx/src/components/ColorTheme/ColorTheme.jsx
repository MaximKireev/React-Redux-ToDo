import React from "react"
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { connect } from "react-redux";
import {setThemeColor} from '../actions'


const ColoreTheme = ({currentColor, setThemeColor}) => {


    return (
        <div>
        <FormControlLabel 
        control={<Switch
        onChange={() => setThemeColor()}
                                    />} 
        label={currentColor? "Dark theme" : "Light theme"}/>
        </div>
    )

 
}
const mapStateToProps = (state) => {
    return {
        currentColor: state.isThemeDefault
    }
}
const mapDispatchToProps = {
    setThemeColor
}


export default connect(mapStateToProps, mapDispatchToProps)(ColoreTheme);