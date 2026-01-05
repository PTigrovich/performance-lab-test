import { useAppDispatch, useAppSelector } from '../../app/hooks'
import ProductCard from './ProductCard'
import { setPage, toggleSortOrder } from './productsSlice'
import Pagination from '../pagination/Pagination'
import styles from './ProductsGrid.module.scss'

const ProductsGrid = () => {
  const dispatch = useAppDispatch()
  const { items, page, limit, sortOrder } = useAppSelector((state) => state.products)
  const category = useAppSelector((state) => state.filters.category)

  const filtered = items.filter((p) => p.category === category)
  const sorted = [...filtered].sort((a, b) =>
    sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
  )

  const start = (page - 1) * limit
  const paginated = sorted.slice(start, start + limit)
  const totalPages = Math.ceil(filtered.length / limit)

  const handlePrev = () => {
    if (page > 1) dispatch(setPage(page - 1))
  }

  const handleNext = () => {
    if (page < totalPages) dispatch(setPage(page + 1))
  }

  const handleSortClick = () => {
    dispatch(toggleSortOrder())
  }

  return (
    <>
      <button onClick={handleSortClick}>
        Сортировка: {sortOrder === 'asc' ? 'A → Z' : 'Z → A'}
      </button>

      <div className={styles.grid}>
        {paginated.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} onPrev={handlePrev} onNext={handleNext} />
    </>
  )
}

export default ProductsGrid
