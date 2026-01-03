import { Product } from '../../entities/product/types'
import styles from './ProductsGrid.module.scss'

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className={styles.card}>
      <h3>{product.title}</h3>
      <p>{product.price} ₽</p>
    </div>
  )
}

export default ProductCard
