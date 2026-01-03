import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import FilterPanel from '../../features/filters/FilterPanel'
import { setCategory } from '../../features/filters/filtersSlice'
import { Category } from '../../entities/product/types'
import ProductsGrid from '../../features/products/ProductsGrid'

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
    </div>
  )
}

export default ProductsPage
