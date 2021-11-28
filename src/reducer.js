import { BottomNavigationAction } from "@material-ui/core";

export const initialState = {
  basket: [],
};

export const getTotalPrice = (basket) => { 
  return basket.reduce((item, amount)=>item.price+amount, 0)
}

const reducer = (state, action) => { 
  console.log(action)
  console.log(action.item)
  console.log(action.type)
  switch (action.type) { 
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
}

export default reducer;