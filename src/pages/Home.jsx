import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import Selected from '../components/Selected';

const Home = () => {
    const [fakeData, setFakeData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                setFakeData(response.data);
            });
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = selectedCategory
        ? fakeData.filter((item) => item.category === selectedCategory)
        : fakeData;

    return (
        <>
            <Selected
                data={fakeData}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
            />
            <div className="grid grid-cols-3 gap-4">
                {filteredData.map((data, index) => (
                    <Card key={index} data={data} />
                ))}
            </div>
        </>
    );
};

export default Home;
