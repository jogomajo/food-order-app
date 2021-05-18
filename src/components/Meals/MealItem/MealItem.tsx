import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import { CartContext } from '../../../store/cart-context';

import classes from './MealItem.module.scss';

interface IProps {
  name: string;
  description: string;
  price: number;
  id: string;
}

const MealItem: React.FC<IProps> = ({ name, description, price, id }) => {
  const cartCtx = useContext(CartContext);

  const priceRounded = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount: number) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
      description: description,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceRounded}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
