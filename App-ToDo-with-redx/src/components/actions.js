const addTodo = value => {
 
    let payload = { id: Date.now(), title: value, important: false, done: false };
    return {
      type: "ADD TODO",
      payload
    };
  };
  
  const remTodo = (id) => ({
    type: "REMOWE TODO",
    payload: id
  });
  
  const markImp = (id) => {
    return {
      type: "MARK IMPORTANT",
      payload: id
    };
  };
  
  const markDone = (id) => {
    return {
      type: "MARK DONE",
      payload: id
    };
  };
  const filterAll = () => {
    return {
      type: "FILTER ALL"
    };
  };
  const filterDone = () => {
    return {
      type: "FILTER DONE"
    };
  };
  const filterImportant = () => {
    return {
      type: "FILTER IMPORTANT"
    };
  };
  const setFormVisible = () => {
    return {
      type: "SET FORM VISIBLE"
    };
  };
  
  export {
    addTodo,
    remTodo,
    markImp,
    markDone,
    filterAll,
    filterDone,
    filterImportant,
    setFormVisible
  };
  