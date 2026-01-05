import { FC } from 'react'
import styles from './Pagination.module.scss'

interface PaginationProps {
  page: number
  totalPages: number
  onPrev: () => void
  onNext: () => void
}

const Pagination: FC<PaginationProps> = ({ page, totalPages, onPrev, onNext }) => {
  return (
    <div className={styles.pagination}>
      <button onClick={onPrev} disabled={page <= 1}>Prev</button>
      <span>{page} / {totalPages}</span>
      <button onClick={onNext} disabled={page >= totalPages}>Next</button>
    </div>
  )
}

export default Pagination
