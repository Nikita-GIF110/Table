import { useContext } from 'react'
import { TableContext } from 'context/TableProvider'

export const useTableContext = () => {
  const value = useContext(TableContext)

  return value
}
