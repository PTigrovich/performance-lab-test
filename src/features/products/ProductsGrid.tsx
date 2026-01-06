import { useAppDispatch, useAppSelector } from '../../app/hooks'
import ProductCard from './ProductCard'
import { setPage, toggleSortOrder } from './productsSlice'
import Pagination from '../pagination/Pagination'
import styles from './ProductsGrid.module.scss'

const ProductsGrid = () => {
  const dispatch = useAppDispatch()

 const { items, page, limit, sortOrder, status, error, total } = useAppSelector(state => state.products)


  if (status === 'loading') {
    return <div>Загрузка...</div>
  }

  if (status === 'failed') {
    return <div>Ошибка: {error}</div>
  }

  const totalPages = Math.ceil(total / limit)

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
        {items.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination
        page={page}
        totalPages={totalPages}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  )
}

export default ProductsGrid

