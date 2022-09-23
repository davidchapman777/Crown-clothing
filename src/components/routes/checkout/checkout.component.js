import './checkout.styles.scss';
import CheckoutItem from '../../checkout-item/checkout-item.component';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../../store/cart/cart.selector';
import PaymentForm from '../../payment-form/payment-form.component';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

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
            <PaymentForm/>
         </div>
    )
}
export default Checkout;