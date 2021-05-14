import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.scss';

const HeaderCartButton: React.FC = (props) => {
  return (
    <button className={classes.button}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
