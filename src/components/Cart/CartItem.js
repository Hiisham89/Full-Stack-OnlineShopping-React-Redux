
import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cardactions } from '../../store/card-slice';

const CartItem = (props) => {
  const { title, quantity, total, price, id} = props.item;
  const dispatch = useDispatch();
  const addhandler=()=>{
    dispatch(cardactions.addtocart({
      id,
      price,
      title,
    }))
  };
  const removehandler=()=>{
    
    dispatch(cardactions.removefromcart(id));

  };


  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removehandler}>-</button>
          <button onClick={addhandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
