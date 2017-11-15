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
    case Type.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case Type.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case Type.REMOVE:
      return {
        ...state,
        counter: state.counter - action.value
      }
    default:
      return state;
  }
}

export default Reducer;