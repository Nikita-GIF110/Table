import PropTypes from 'prop-types'
import styles from './TableRow.module.css'

const Cell = ({ cell }) => {
  const [dataField, cellValue] = cell

  return (
    <div className={styles.cell}>
      {cellValue}
    </div>
  )
}
Cell.propTypes = { cell: PropTypes.array }
Cell.defaultProps = { cell: [] }

export const TableRow = ({ row, count }) => {
  const rowArray = Object.entries(row)

  const rowStyles = {
    gridTemplateColumns: `repeat(${count}, 1fr)`,
  }

  return (
    <div className={styles.row} style={rowStyles}>
      {rowArray.map((cell) => <Cell key={cell[1]} cell={cell} />)}
    </div>
  )
}
TableRow.propTypes = { row: PropTypes.object, count: PropTypes.number }
TableRow.defaultProps = { row: {}, count: 1 }
