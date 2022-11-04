import { Table } from 'components'
import { data } from 'data'

const App = () => {
  const columns = [
    { dataField: 'film', label: 'film' },
    { dataField: 'releaseDate', label: 'Release Datae' },
    { dataField: 'rating', label: 'rating' },
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
