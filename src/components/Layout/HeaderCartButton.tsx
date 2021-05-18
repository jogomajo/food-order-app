import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import { CartContext } from '../../store/cart-context';

import classes from './HeaderCartButton.module.scss';

interface IProps {
  onClick: () => void;
}

const HeaderCartButton: React.FC<IProps> = ({ onClick }) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
