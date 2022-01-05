let initialState = {
    todos: localStorage.getItem("item")
      ? JSON.parse(localStorage.getItem("item"))
      : [
          {
            id: Date.now(),
            title: "create react-redux APP",
            important: false,
            done: false
          }
        ],
    getCountTodos: () => {
      return this.todos.length;
    }
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD TODO":
        return { ...state, todos: [...state.todos, action.payload] };
  
      case "REMOWE TODO":
        return {
          ...state,
          todos: state.todos.filter((item) => item.id !== action.payload)
        };
      case "MARK IMPORTANT":
        return {
          ...state,
          todos: state.todos.map((item) =>
            item.id === action.payload
              ? { ...item, important: !item.important }
              : item
          )
        };
      case "MARK DONE":
        return {
          ...state,
          todos: state.todos.map((item) =>
            item.id === action.payload ? { ...item, done: !item.done } : item
          )
        };
      case "FILTER ALL":
        return {
          ...state
        };
      case "FILTER DONE":
        return {
          ...state,
          todos: state.todos.filter((item) => item.done)
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  