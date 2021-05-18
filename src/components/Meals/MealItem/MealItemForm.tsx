import { useRef, FormEvent, useState } from 'react';

import Input from '../../UI/Input';

import classes from './MealItemForm.module.scss';

interface IProps {
  id: string;
  onAddToCart: (amount: number) => void;
}

const MealItemForm: React.FC<IProps> = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    let enteredAmount = '1';
    let enteredAmountNumber = 1;

    if (amountInputRef.current) {
      enteredAmount = amountInputRef.current.value;
      enteredAmountNumber = +enteredAmount;
    }

    if (enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
