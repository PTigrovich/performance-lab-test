import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import ProductCard from './ProductCard'
import { setPage } from './productsSlice'
import styles from './ProductsGrid.module.scss'

const ProductsGrid = () => {
  const dispatch = useDispatch()
  const { items, page, limit } = useSelector(
    (state: RootState) => state.products
  )
  const category = useSelector(
    (state: RootState) => state.filters.category
  )

  const filtered = items.filter((p) => p.category === category)
  const start = (page - 1) * limit
  const paginated = filtered.slice(start, start + limit)
  const totalPages = Math.ceil(filtered.length / limit)

  return (
    <>
      <div className={styles.grid}>
        {paginated.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className={styles.pagination}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => dispatch(setPage(index + 1))}
            className={page === index + 1 ? styles.active : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  )
}

export default ProductsGrid