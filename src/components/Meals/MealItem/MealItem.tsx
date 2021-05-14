import classes from './MealItem.module.scss';

interface IProps {
  name: string;
  description: string;
  price: number;
}

const MealItem: React.FC<IProps> = ({ name, description, price }) => {
  const priceRounded = `$${price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceRounded}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
