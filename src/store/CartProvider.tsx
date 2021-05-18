import { useReducer } from 'react';

import { CartContext } from './cart-context';

import { ItemTypes, CartReducerActions } from './cart-context';

const defaultCartState: { items: ItemTypes[]; totalAmount: number } = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = defaultCartState, action: CartReducerActions) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  return state;
};

const CartProvider: React.FC = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item: ItemTypes) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id: string) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
