import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useSearchParams } from 'react-router-dom'
import FilterPanel from '../../features/filters/FilterPanel'
import ProductsGrid from '../../features/products/ProductsGrid'
import { setCategory } from '../../features/filters/filtersSlice'
import { setPage } from '../../features/products/productsSlice'
import { Category } from '../../entities/product/types'

import { toggleCart } from '../../features/cart/cartSlice'
import CartSidebar from '../../features/cart/CartSidebar'
import styles from './ProductsPage.module.scss'



const ProductsPage = () => {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()

  const category = useAppSelector(state => state.filters.category)
  const page = useAppSelector(state => state.products.page)

  const handleToggleCart = () => {
    dispatch(toggleCart());
  }

  // Восстановление состояния из URL при заходе
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category') as Category | null
    const pageFromUrl = parseInt(searchParams.get('page') || '1', 10)

    if (categoryFromUrl) dispatch(setCategory(categoryFromUrl))
    if (!isNaN(pageFromUrl)) dispatch(setPage(pageFromUrl))
  }, [dispatch, searchParams])

  // Сброс страницы при смене категории
  useEffect(() => {
    dispatch(setPage(1))
  }, [category, dispatch])

  // Синхронизация store -> URL
  useEffect(() => {
    setSearchParams({ category, page: String(page) })
  }, [category, page, setSearchParams])

  return (
    <div className={styles.page}>
      <FilterPanel />
      <ProductsGrid />

      <button onClick={handleToggleCart}>
  			Открыть корзину
		</button>

      <CartSidebar />
    </div>
  )
}

export default ProductsPage

