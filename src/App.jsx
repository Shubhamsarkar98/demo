import './App.css'
import axios from 'axios'
import Card from './components/Card'
import { useEffect, useState } from 'react'

function App() {
  const [fakeData, setFakeData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    await axios.get('https://fakestoreapi.com/products').then((response) => {
      setFakeData(response.data)
    })
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {fakeData.map((data, index) => {
        return <Card key={index} data={data} />
      })}
    </div>
  )
}

export default App
