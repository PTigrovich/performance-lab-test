import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useSearchParams } from 'react-router-dom'
import { setCategory } from './filtersSlice'
import { Category } from '../../entities/product/types'
import { CATEGORIES, CATEGORY_LABELS } from '../../entities/product/constants'
import styles from './FilterPanel.module.scss'

const categories: Category[] = [
  CATEGORIES.FOOD,
  CATEGORIES.CLOTHES,
  CATEGORIES.ELECTRONICS,
]

const FilterPanel = () => {
  const dispatch = useAppDispatch()
  const category = useAppSelector(state => state.filters.category)
  const [, setSearchParams] = useSearchParams()

  const handleSelectCategory = (value: Category) => {
    dispatch(setCategory(value))
    setSearchParams({ category: value })
  }

  return (
    <div className={styles.panel}>
      {categories.map(categoryValue => (
        <button
          key={categoryValue}
          onClick={() => handleSelectCategory(categoryValue)}
          className={category === categoryValue ? styles.active : ''}
        >
          {CATEGORY_LABELS[categoryValue]}
        </button>
      ))}
    </div>
  )
}

export default FilterPanel
