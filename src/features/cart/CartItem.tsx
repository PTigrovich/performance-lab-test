import { memo } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { removeFromCart } from './cartSlice'
import styles from './CartSidebar.module.scss'

interface CartItemProps {
  id: number
  title: string
  price: number
  quantity: number
}

const CartItem = memo(
  ({ id, title, price, quantity }: CartItemProps) => {
    const dispatch = useAppDispatch()

	const handleRemove = () => {
    dispatch(removeFromCart(id))
   }

    return (
      <div className={styles.item}>
        <span className={styles.title}>{title}</span>
        <span className={styles.quantity}>x{quantity}</span>
        <button onClick={handleRemove}>✕</button>
      </div>
    )
  }
)

export default CartItem
