import { useReducer } from 'react';

import { CartContext } from './cart-context';

import { ItemTypes, CartReducerActions } from './cart-context';

const defaultCartState: { items: ItemTypes[]; totalAmount: number } = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state = defaultCartState, action: CartReducerActions) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const exisitingCartItem = state.items[exisitingCartItemIndex];

    let updatedItems;

    if (exisitingCartItem) {
      const updatedItem = {
        ...exisitingCartItem,
        amount: exisitingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[exisitingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === 'REMOVE') {
    const exisitingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[exisitingCartItemIndex];
    const updatedtotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[exisitingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedtotalAmount,
    };
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
