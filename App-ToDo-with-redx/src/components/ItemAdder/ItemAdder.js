
import '../ItemAdder/ItemAdder.css'

import { useEffect, useState } from 'react';
import {connect} from 'react-redux'
import {setFormVisible, addTodo } from '../actions'

const ItemAdder = ({visible, setFormVisible, addTodo, currentTheme}) => {
  let [value, setValue] = useState("");

  const onInputChange = (event) => {
      setValue(event.target.value);
  };

  const onSubmit = (e) => {
      e.preventDefault();
  };

  useEffect(() => {
    let wrapper = document.querySelector('.addNewItem-wrapper');
    let inp = document.querySelector('.inputItemAdder');
    let clicked = false;

    document.querySelector('.btnAddNewItem').addEventListener('click', () => {

    clicked = !clicked
    
    wrapper.classList.add('animate-wrapper');
    setTimeout(()=>{
      inp.classList.add('left');
    inp.focus();},500)
    

})
  })

return (
  
  <div className = 'addNewItem-wrapper'>
     <form className="formAdd" onSubmit={onSubmit}>
    <input
               
                className="inputItemAdder"
                type="text"
                value={value}
                placeholder="Add ToDo item here"
                onChange={onInputChange}/>
  <button
   onClick = {!visible ? setFormVisible : () => addTodo(value)}
   className = 'btnAddNewItem'
   >Add New Item</button>
   </form>
   </div> 
  
)
  
};

const mapStateToProps = (state) => {
  return {
      visible: state.setVisible,
      currentTheme: state.isThemeDefault
  }
}

const mapDispatchToProps =  {
  setFormVisible, addTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemAdder);

