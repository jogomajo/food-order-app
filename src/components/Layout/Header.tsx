import mealsImage from '../../assets/meals.jpg';

import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.scss';

interface IProps {
  onShowCart: () => void;
}

const Header: React.FC<IProps> = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
};

export default Header;
