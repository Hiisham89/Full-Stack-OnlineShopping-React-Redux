import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiactions } from '../../store/UI-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalquantity = useSelector(state => state.cardmanagement.totalquantity);
  const onclickhandler = () =>{
    dispatch(uiactions.showcart());
  }
  return (
    <button className={classes.button} onClick={onclickhandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalquantity}</span>
    </button>
  );
};

export default CartButton;
