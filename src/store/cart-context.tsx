import React from 'react';

interface ICartContext {
  items: ItemTypes[];
  totalAmount: number;
  addItem: (item: ItemTypes) => void;
  removeItem: (id: string) => void;
}

export type ItemTypes = {
  name: string;
  description: string;
  price: number;
  id: string;
  amount: number;
};

type AddAction = {
  type: 'ADD';
  item: ItemTypes;
};

type RemoveAction = {
  type: 'REMOVE';
  id: string;
};

export type CartReducerActions = AddAction | RemoveAction;

export const CartContext = React.createContext<ICartContext>({
  items: [],
  totalAmount: 0,
  addItem: (item: ItemTypes) => {},
  removeItem: (id: string) => {},
});

// CART PROVIDER COMPONENT

// const defaultCartState: { items: ItemTypes[]; totalAmount: number } = {
//   items: [],
//   totalAmount: 0,
// };

// const cartReducer = (state = defaultCartState, action: CartReducerActions) => {
//   if (action.type === 'ADD') {
//     const updatedItems = state.items.concat(action.item);
//     const updatedTotalAmount =
//       state.totalAmount + action.item.price * action.item.amount;

//     return { items: updatedItems, totalAmount: updatedTotalAmount };
//   }

//   return state;
// };

// const CartProvider: React.FC = ({ children }) => {
//   const [cartState, dispatchCartAction] = useReducer(
//     cartReducer,
//     defaultCartState
//   );

//   const addItemToCartHandler = (item: ItemTypes) => {
//     dispatchCartAction({ type: 'ADD', item: item });
//   };

//   const removeItemFromCartHandler = (id: string) => {
//     dispatchCartAction({ type: 'REMOVE', id: id });
//   };

//   const cartContext: ICartContext = {
//     items: cartState.items,
//     totalAmount: cartState.totalAmount,
//     addItem: addItemToCartHandler,
//     removeItem: removeItemFromCartHandler,
//   };

//   return (
//     <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
//   );
// };

// export default CartProvider;
