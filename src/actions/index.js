export const addCounter = () => {
  return {
    type: 'ADD_COUNTER'
  }
};

export const removeCounter = () => {
  return {
    type: 'REMOVE_COUNTER'
  }
};

export const incrementCounter = (index) => {
  return {
    type: 'INC_COUNTER',
    index
  }
};

export const decrementCounter = (index) => {
  return {
    type: 'DEC_COUNTER',
    index
  }
};
