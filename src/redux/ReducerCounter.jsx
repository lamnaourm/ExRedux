import * as ActionsTypes from "./ActionsTypes";

const initialState = {
  compteur: 20,
};

const ReducerCounter = (state = initialState, action) => {
    let newState = {...state}
  switch (action.type) {
    case ActionsTypes.INCREMNET:
        newState.compteur += action.payload;
      break;
    case ActionsTypes.DECREMNET:
        newState.compteur += action.payload;
      break;
    case ActionsTypes.INIT:
        newState.compteur = 0;
      break;
  }
  return newState;
};

export default ReducerCounter;
