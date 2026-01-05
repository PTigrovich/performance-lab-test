import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { toggleCart } from './cartSlice'
import CartItem from './CartItem'
import styles from './CartSidebar.module.scss'

const CartSidebar = () => {
  const dispatch = useAppDispatch()
  const { items, isOpen } = useAppSelector(
    state => state.cart
  )

  const handleCloseCart = () => {
    dispatch(toggleCart())
  }

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <button onClick={handleCloseCart}>Закрыть</button>

      {items.length === 0 && <p>Корзина пуста</p>}

      {items.map((item) => (
        <CartItem
  				key={item.id}
  				id={item.id}
  				title={item.title}
  				price={item.price}
  				quantity={item.quantity}
		   />
      ))}
    </div>
  )
}

export default CartSidebar
