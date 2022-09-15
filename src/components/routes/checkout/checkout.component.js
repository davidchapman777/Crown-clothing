import './checkout.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../../context/cart.context';
import CheckoutItem from '../../checkout-item/checkout-item.component';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <div className='checkout-container'>
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>PRODUCT</span>
                    </div>
                    <div className='header-block'>
                        <span>DESCRIPTION</span>
                    </div>
                    <div className='header-block'>
                        <span>QUANTITY</span>
                    </div>
                    <div className='header-block'>
                        <span>PRICE</span>
                    </div>
                    <div className='header-block'>
                        <span>REMOVE</span>
                    </div>
                </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
            <span className='total'>TOTAL: ${cartTotal}</span>
         </div>
    )
}
export default Checkout;