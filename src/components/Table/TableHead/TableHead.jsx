import PropTypes from 'prop-types'
import styles from './TableHead.module.css'

export const TableHead = ({ columns, count }) => {
  const headerStyles = {
    gridTemplateColumns: `repeat(${count}, 1fr)`,
  }
  return (
    <div className={styles.header} style={headerStyles}>
      {columns.map((column) => (
        <div className={styles.cell} key={column.label}>
          {column.label}
        </div>
      ))}
    </div>
  )
}
TableHead.propTypes = { columns: PropTypes.array, count: PropTypes.number }
TableHead.defaultProps = { columns: [], count: 1 }
