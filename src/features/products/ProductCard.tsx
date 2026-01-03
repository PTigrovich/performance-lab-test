import { useDispatch } from 'react-redux'
import { addToCart } from '../cart/cartSlice'
import { Product } from '../../entities/product/types'
import styles from './ProductsGrid.module.scss'

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.card}>
      <h3>{product.title}</h3>
      <p>{product.price} ₽</p>
      <button onClick={() => dispatch(addToCart(product))}>
        В корзину
      </button>
    </div>
  )
}

export default ProductCard
