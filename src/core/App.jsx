import { Table } from 'components'
import { data } from 'data'

const App = () => {
  const columns = [
    { dataField: 'film', label: 'film' },
    { dataField: 'releaseDate', label: 'Release Datae' },
    { dataField: 'rating', label: 'rating' },
    { dataField: 'testA', label: 'testA' },
    { dataField: 'testB', label: 'testB' },
    { dataField: 'testC', label: 'testC' },
    { dataField: 'test1', label: 'test1' },
    { dataField: 'test2', label: 'test2' },
    { dataField: 'test3', label: 'test3' },
    { dataField: 'test4', label: 'test4' },
    { dataField: 'test5', label: 'test5' },
  ]

  return (
    <div className="container">
      <Table
        columns={columns}
        items={data}
      />
    </div>
  )
}

export default App
