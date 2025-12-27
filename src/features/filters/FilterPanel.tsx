import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { RootState } from '../../app/store'
import { setCategory } from './filtersSlice'
import { Category } from '../../entities/product/types'
import styles from './FilterPanel.module.scss'

const categories: { label: string; value: Category }[] = [
  { label: 'Еда', value: 'food' },
  { label: 'Одежда', value: 'clothes' },
  { label: 'Электроника', value: 'electronics' },
]

const FilterPanel = () => {
  const dispatch = useDispatch()
  const category = useSelector((state: RootState) => state.filters.category)
  const [, setSearchParams] = useSearchParams()

  const onSelectCategory = (value: Category) => {
    dispatch(setCategory(value))
    setSearchParams({ category: value })
  }

  return (
    <div className={styles.panel}>
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onSelectCategory(cat.value)}
          className={category === cat.value ? styles.active : ''}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}

export default FilterPanel