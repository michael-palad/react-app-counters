const counterReducer = (state = [], action) => {
  let newState = [];

  switch (action.type) {
    case 'ADD_COUNTER':
      newState = [...state, 0];
      return newState;
    case 'REMOVE_COUNTER':
      newState = state.slice(0, state.length-1)
      return newState;
    case 'INC_COUNTER':
      newState = [...state];
      newState[action.index]++;
      return newState;
    case 'DEC_COUNTER':
      newState = [...state];
      newState[action.index]--;
      return newState;
    default:
      return state;
  }
};

export default counterReducer;
