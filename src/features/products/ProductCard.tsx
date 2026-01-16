import { useDispatch } from 'react-redux'
import { addToCart } from '../cart/cartSlice'
import { Product } from '../../entities/product/types'
import styles from './ProductCard.module.scss'

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch()
  
  const handleAddToCart = () => {
  dispatch(addToCart(product))
} 

  return (
    <div className={styles.card}>
      <h3>{product.title}</h3>
      <p>{product.price} ₽</p>
      <button onClick={handleAddToCart}>
        В корзину
      </button>
    </div>
  )
}

export default ProductCard
