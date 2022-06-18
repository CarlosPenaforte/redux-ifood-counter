import { ADD, SUBTRACT } from "./actions";

const initialState = {
  count: 0,
  price: 0,
  minusButtonStyle: "disableButton"
};

export function reducer(state = initialState, action) {

  switch( action.type ) {
    case ADD:
      return { count:state.count+1, price:(state.count+1)*12, minusButtonStyle:"Button" };
    case SUBTRACT:
      if(state.count===1){
        return({ count:state.count-1, price:(state.count-1)*12, minusButtonStyle:"disableButton" })
      }else if(state.count>1){
        return({ count:state.count-1, price:(state.count-1)*12, minusButtonStyle:"Button" })
      } else{
        return state;
      }
    default:
      return state;
  };
}