import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import axios from 'axios';
import Selected from '../components/Selected';
import Search from '../components/Search';

const Home = () => {
    const [fakeData, setFakeData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setFakeData(response.data);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredData = fakeData.filter((item) => {
        const categoryMatch = !selectedCategory || item.category === selectedCategory;
        const searchMatch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        return categoryMatch && searchMatch;
    });

    return (
        <>
            <div className='flex justify-center items-center space-between'>
                <Selected
                    data={fakeData}
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                />
                <Search
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            {filteredData.length === 0 ? (
                <div className="text-center mt-4">
                    No results found.
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-4">
                    {filteredData.map((data, index) => (
                        <Card key={index} data={data} />
                    ))}
                </div>
            )}
        </>
    );
};

export default Home;
