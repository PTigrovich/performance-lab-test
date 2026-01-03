import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import FilterPanel from '../../features/filters/FilterPanel'
import { setCategory } from '../../features/filters/filtersSlice'
import { Category } from '../../entities/product/types'
import ProductsGrid from '../../features/products/ProductsGrid'

import { toggleCart } from '../../features/cart/cartSlice'
import CartSidebar from '../../features/cart/CartSidebar'

const ProductsPage = () => {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const category = searchParams.get('category') as Category | null
    if (category) {
      dispatch(setCategory(category))
    }
  }, [dispatch, searchParams])

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
