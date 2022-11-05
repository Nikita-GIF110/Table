import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { TableHead } from './TableHead'
import { TableBody } from './TableBody'

import styles from './Table.module.scss'

export const Table = ({ columns, items }) => {
  const tableRef = useRef()

  const [count, setCount] = useState(1)
  const [rows, setRows] = useState([])

  const generateArrayRow = () => {
    const headerTemplate = columns.map(({ dataField }) => dataField)
    const rowsTemplate = []

    for (let i = 0; i < items.length; i += 1) {
      const item = items[i]
      const itemTemplate = []

      Object.entries(item).map(([key, value]) => {
        const fieldIndex = headerTemplate.findIndex((field) => field === key)
        itemTemplate[fieldIndex] = { [key]: value }
        return itemTemplate
      })
      rowsTemplate.push(itemTemplate)
    }
    setRows(rowsTemplate)
  }

  useEffect(() => {
    setCount(columns.length)
    generateArrayRow()
  }, [columns])

  return (
    <div
      ref={tableRef}
      className={styles.table}
    >
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
