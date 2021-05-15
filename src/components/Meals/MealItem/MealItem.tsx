import MealItemForm from './MealItemForm';

import classes from './MealItem.module.scss';

interface IProps {
  name: string;
  description: string;
  price: number;
  id: string;
}

const MealItem: React.FC<IProps> = ({ name, description, price, id }) => {
  const priceRounded = `$${price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceRounded}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};

export default MealItem;
