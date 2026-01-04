import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from './cartSlice'
import styles from './CartSidebar.module.scss'

interface Props {
  item: {
    id: number
    title: string
    quantity: number
    price: number
  }
}

const CartItem = memo(({ item }: Props) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.item}>
      <span className={styles.title}>{item.title}</span>
      <span className={styles.quantity}>x{item.quantity}</span>
      <button onClick={() => dispatch(removeFromCart(item.id))}>
        ✕
      </button>
    </div>
  )
})

export default CartItem
