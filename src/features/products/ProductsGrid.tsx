import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import ProductCard from './ProductCard'
import { setPage } from './productsSlice'
import styles from './ProductsGrid.module.scss'
import { toggleSortOrder } from './productsSlice'

const ProductsGrid = () => {
  const dispatch = useDispatch()
  const { items, page, limit, sortOrder } = useSelector(
  (state: RootState) => state.products
  )
  const category = useSelector(
    (state: RootState) => state.filters.category
  )
  

  const filtered = items.filter((p) => p.category === category)

const sorted = [...filtered].sort((a, b) => {
  if (sortOrder === 'asc') {
    return a.title.localeCompare(b.title)
  }
  return b.title.localeCompare(a.title)
})

const start = (page - 1) * limit


const totalPages = Math.ceil(filtered.length / limit)
const paginated = sorted.slice(start, start + limit)

  return (
    <>
	 <button onClick={() => dispatch(toggleSortOrder())}>
  		Сортировка: {sortOrder === 'asc' ? 'A → Z' : 'Z → A'}
	 </button>
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