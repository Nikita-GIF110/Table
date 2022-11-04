import PropTypes from 'prop-types'
import { TableRow } from './TableRow'

import styles from './TableBody.module.css'

export const TableBody = ({ rows, count }) => (
  <div className={styles.body}>
    {rows.map((row, index) => {
      const rowKey = `row-${index}`
      return <TableRow key={rowKey} row={row} count={count} />
    })}
  </div>
)
TableBody.propTypes = { rows: PropTypes.array, count: PropTypes.number }
TableBody.defaultProps = { rows: [], count: 1 }
