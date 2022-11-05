import PropTypes from 'prop-types'
import styles from './TableRow.module.scss'

const Cell = ({ cell }) => {
  const [, value] = cell
  return (
    <div className={styles.cell}>
      {value}
    </div>
  )
}
Cell.propTypes = { cell: PropTypes.array }
Cell.defaultProps = { cell: [] }

export const TableRow = ({ row, count }) => {
  const rowStyles = {
    gridTemplateColumns: `repeat(${count}, minmax(100px, 1fr))`,
  }

  return (
    <div className={styles.row} style={rowStyles}>
      {row.map((cell, index) => {
        const cellKey = `cell-${index}`
        const cellData = Object.entries(cell).flat()
        return <Cell key={cellKey} cell={cellData} />
      })}
    </div>
  )
}
TableRow.propTypes = { row: PropTypes.array, count: PropTypes.number }
TableRow.defaultProps = { row: [], count: 1 }
