import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { toggleCart } from './cartSlice'
import CartItem from './CartItem'
import styles from './CartSidebar.module.scss'

const CartSidebar = () => {
  const dispatch = useDispatch()
  const { items, isOpen } = useSelector(
    (state: RootState) => state.cart
  )

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <button onClick={() => dispatch(toggleCart())}>Закрыть</button>

      {items.length === 0 && <p>Корзина пуста</p>}

      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default CartSidebar
