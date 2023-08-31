'use client';
import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { CartItem } from '@/services/Cart';

type StateType = CartItem[];

type ActionType = {
  type: string;
  item: CartItem;
};

const initialState: StateType = [];

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, count: state.item + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'RESET':
      return { ...state, count: 0 };
    default:
      return state;
  }
};

export const CartContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

const CartProvider = ({ children }: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
