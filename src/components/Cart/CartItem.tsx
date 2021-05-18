import React from 'react';
import classes from './CartItem.module.scss';

interface ICartItemProps {
  name: string;
  amount: number;
  price: number;
  onRemove: () => void;
  onAdd: () => void;
}

const CartItem: React.FC<ICartItemProps> = ({
  name,
  amount,
  price,
  onRemove,
  onAdd,
}) => {
  const priceRounded = `$${price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{priceRounded}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
