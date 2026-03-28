import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useSearchParams } from 'react-router-dom'

import FilterPanel from '../../features/filters/FilterPanel'
import ProductsGrid from '../../features/products/ProductsGrid'
import CartSidebar from '../../features/cart/CartSidebar'

import { setCategory } from '../../features/filters/filtersSlice'
import {
  setPage,
  fetchProducts,
} from '../../features/products/productsSlice'
import { toggleCart } from '../../features/cart/cartSlice'

import { Category } from '../../entities/product/types'
import styles from './ProductsPage.module.scss'

const ProductsPage = () => {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()

  const category = useAppSelector(state => state.filters.category)
  const { page, limit, sortOrder } = useAppSelector(
    state => state.products
  )

  /* восстановление из URL */
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category') as Category | null
    const pageFromUrl = Number(searchParams.get('page') || 1)

    if (categoryFromUrl) dispatch(setCategory(categoryFromUrl))
    if (!isNaN(pageFromUrl)) dispatch(setPage(pageFromUrl))
  }, [dispatch, searchParams])

  /* загрузка товаров */
  useEffect(() => {
    dispatch(
      fetchProducts({
        category,
        page,
        limit,
        sortOrder,
      })
    )
  }, [dispatch, category, page, limit, sortOrder])

  /* синхронизация store → URL */
  useEffect(() => {
    setSearchParams({
      category,
      page: String(page),
    })
  }, [category, page, setSearchParams])

  const handleToggleCart = () => {
    dispatch(toggleCart())
  }

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
