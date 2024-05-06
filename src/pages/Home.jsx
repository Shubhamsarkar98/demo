import React from 'react'
import Card from '../components/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'
const Home = () => {
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

export default Home
