import PropTypes from 'prop-types'
import styles from './TableHead.module.scss'

export const TableHead = ({ columns, count }) => (
  <div className={styles.header}>
    {columns.map((column) => (
      <div className={styles.cell} key={column.label}>
        {column.label}
      </div>
    ))}
  </div>
)
TableHead.propTypes = { columns: PropTypes.array, count: PropTypes.number }
TableHead.defaultProps = { columns: [], count: 1 }
