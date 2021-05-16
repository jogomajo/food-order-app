import CartIcon from '../Cart/CartIcon';

import classes from './HeaderCartButton.module.scss';

interface IProps {
  onClick: () => void;
}

const HeaderCartButton: React.FC<IProps> = ({ onClick }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
