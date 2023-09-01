'use client';
import {
  createContext,
  Dispatch,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer
} from 'react';
import { CartItem } from '@/services/Cart';
import { cart } from '@/services';

type StateType = CartItem[];

type ActionType =
  { type: string; } |
  { type: string; item: CartItem; }

const initialState: StateType = [];

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'INIT':
      return cart.getAllItems();
    case 'ADD_ITEM':
      // @ts-ignore
      cart.addItem(action.item);
      // @ts-ignore
      return [ ...state, action.item ];
    default:
      return state;
  }
};

export const CartContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
  alreadyInCart: (id: string) => boolean;
}>({
  state: initialState,
  dispatch: () => null,
  alreadyInCart: () => false
});

export const useCart = () => {
  return useContext(CartContext);
}

const CartProvider = ({ children }: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const alreadyInCart = useCallback((id: string) => {
    return (state as CartItem[]).some((item) =>  item.id == id)
  }, [state]);

  useEffect(() => {
    dispatch({type: 'INIT'})
  }, [])

  return (
    <CartContext.Provider value={{ state, dispatch, alreadyInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
