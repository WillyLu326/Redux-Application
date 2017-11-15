import Type from './../Type';

const initialState = {
  counter: 100
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    default:
      return state;
  }
}

export default Reducer;