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
  addItem: () => {},
  removeItem: () => {},
});
