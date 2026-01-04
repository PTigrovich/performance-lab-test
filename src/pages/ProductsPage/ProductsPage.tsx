import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { RootState } from '../../app/store'
import FilterPanel from '../../features/filters/FilterPanel'
import ProductsGrid from '../../features/products/ProductsGrid'
import { setCategory } from '../../features/filters/filtersSlice'
import { setPage } from '../../features/products/productsSlice'
import { Category } from '../../entities/product/types'

import { toggleCart } from '../../features/cart/cartSlice'
import CartSidebar from '../../features/cart/CartSidebar'
import styles from './ProductsPage.module.scss'

const ProductsPage = () => {
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()

  const category = useSelector((state: RootState) => state.filters.category)
  const page = useSelector((state: RootState) => state.products.page)

  // 1️⃣ Восстановление состояния из URL при заходе
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category') as Category | null
    const pageFromUrl = parseInt(searchParams.get('page') || '1', 10)

    if (categoryFromUrl) dispatch(setCategory(categoryFromUrl))
    if (!isNaN(pageFromUrl)) dispatch(setPage(pageFromUrl))
  }, [dispatch, searchParams])

  // 2️⃣ Сброс страницы при смене категории
  useEffect(() => {
    dispatch(setPage(1))
  }, [category, dispatch])

  // 3️⃣ Синхронизация store -> URL
  useEffect(() => {
    setSearchParams({ category, page: String(page) })
  }, [category, page, setSearchParams])

  return (
    <div className={styles.page}>
      <FilterPanel />
      <ProductsGrid />

      <button onClick={() => dispatch(toggleCart())}>
        Открыть корзину
      </button>

      <CartSidebar />
    </div>
  )
}

export default ProductsPage

