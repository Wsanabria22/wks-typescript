const initalState: stateI = {
  counter: 1,
}

const  rootReducer = (state: stateI = initalState, action: actionI): stateI => {
  switch (action.type) {
    case 'INCREMENT':
        return  state;
    default:
      return  state;
  }
};

export default rootReducer;
