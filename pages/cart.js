import { useSelector, useDispatch } from 'react-redux';
import {
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } from '../redux/cart.slice';
import LayoutDefault from './../layout/index';
import styles from './../styles/Cart.module.scss';

export default function Cart() {
    
  // Extracting cart state from redux store 
  const cart = useSelector((state) => state.cart);

  // Reference to the dispatch function from redux store
  const dispatch = useDispatch();
  
  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };


    return (
  
        <LayoutDefault>  
            <div className={styles.container}>
                {cart.length === 0 ? (
                    <h1>Your Cart is Empty!</h1>
                ) : (
                    <>
                        <div className={styles.cart}>
                        <h1>Cart</h1>
                        <h2>You have {cart.length} articles in your cart</h2>
                        </div>
                            {cart.map((item) => ( 
                                <li className={styles.productCard} key={item.id}>                                
                                    <div className={styles.image}>
                                        <img src={item.iamge} height="90" width="65" />
                                    </div>
                                    <p>{item.description}</p>    
                                    <p>$ {item.price}</p>                            
                                    <button onClick={() => dispatch(decrementQuantity(item.id))}>
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => dispatch(incrementQuantity(item.id))}>
                                        +
                                    </button>                            
                                <p>$ {item.quantity * item.price}</p>
                                <button onClick={() => dispatch(removeFromCart(item.id))}>
                                    x
                                </button>   
                        </li>
                        ))}
                        <h2>Total: $ {getTotalPrice()}</h2>
                    </>
                )}
            </div>
        </LayoutDefault>
    );
}




