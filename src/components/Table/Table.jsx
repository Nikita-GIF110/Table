import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { TableHead } from './TableHead'
import { TableBody } from './TableBody'
import { TablePagination } from './TablePagination'

import styles from './Table.module.scss'

export const Table = ({
  columns,
  items,
  pagination,
  sizePagesList,
}) => {
  const tableRef = useRef(null)

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

  const onWheel = () => {
    // const elem = tableRef.current
    // console.log()
    // event.preventDefault()
    // elem.scrollTo({
    //   left: elem.scrollLeft + event.deltaY * 4,
    //   behavior: 'smooth',
    // })
  }

  const onTableChange = () => { }

  useEffect(() => {
    setCount(columns.length)
    generateArrayRow()
  }, [columns])

  useEffect(() => {
    const scrollElem = tableRef.current
    if (scrollElem) {
      scrollElem.addEventListener('wheel', onWheel)
    }
  })

  return (
    <div className={styles.table}>
      <div
        ref={tableRef}
        className={styles.content}
      >
        <TableHead columns={columns} count={count} />
        <TableBody rows={rows} count={count} />
      </div>
      <TablePagination
        pagination={pagination}
        sizePagesList={sizePagesList}
        callback={onTableChange}
      />
    </div>
  )
}
Table.propTypes = {
  columns: PropTypes.array,
  items: PropTypes.array,
  pagination: PropTypes.shape({
    page: PropTypes.number,
    per_page: PropTypes.number,
    pages: PropTypes.number,
    total: PropTypes.number,
  }),
  sizePagesList: PropTypes.array,
}
Table.defaultProps = {
  columns: [],
  items: [],
  pagination: {
    page: 1,
    per_page: 50,
    pages: 100,
    total: 100,
  },
  sizePagesList: [50, 100, 200],
}
