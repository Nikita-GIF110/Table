import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { TableHead } from './TableHead'
import { TableBody } from './TableBody'

import styles from './Table.module.css'

export const Table = ({ columns, items }) => {
  const [count, setCount] = useState(1)
  const [rows, setRows] = useState([])

  const generateArrayRow = () => {
    const headerTemplate = columns.map(({ dataField }) => dataField)
    items.forEach((row) => {
      const dd = headerTemplate.findIndex((field) => field)
    })
  }

  useEffect(() => {
    setCount(columns.length)
    generateArrayRow()
  }, [columns])

  return (
    <div className={styles.wrapper}>
      <TableHead columns={columns} count={count} />
      <TableBody rows={rows} count={count} />
    </div>
  )
}
Table.propTypes = {
  columns: PropTypes.array,
  items: PropTypes.array,
}
Table.defaultProps = {
  columns: [],
  items: [],
}
