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

const ProductsPage = () => {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()

  const category = useSelector(
    (state: RootState) => state.filters.category
  )

  // URL восстанавливаем из категории
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category') as Category | null
    if (categoryFromUrl) {
      dispatch(setCategory(categoryFromUrl))
    }
  }, [dispatch, searchParams])

  // смена категории- сброс страницы до 1
  useEffect(() => {
    dispatch(setPage(1))
  }, [category, dispatch])

  return (
    <div>
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
