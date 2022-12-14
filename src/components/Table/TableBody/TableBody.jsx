import PropTypes from 'prop-types'
import { TableRow } from './TableRow'

export const TableBody = ({ rows, count }) => (
  <div>
    {rows.map((row, index) => {
      const rowKey = `row-${index}`
      return <TableRow key={rowKey} row={row} count={count} />
    })}
  </div>
)
TableBody.propTypes = { rows: PropTypes.array, count: PropTypes.number }
TableBody.defaultProps = { rows: [], count: 1 }
