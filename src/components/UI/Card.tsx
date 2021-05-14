import classes from './Cart.module.scss';

const Card: React.FC = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
