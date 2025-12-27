import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import FilterPanel from '../../features/filters/FilterPanel'
import { setCategory } from '../../features/filters/filtersSlice'
import { Category } from '../../entities/product/types'

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
      {/* здесь будет грид товаров */}
    </div>
  )
}

export default ProductsPage
