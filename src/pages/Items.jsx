import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardItem from '../components/CardItem';
import { useParams } from "react-router-dom";

const Items = () => {
  const [item, setItem] = useState(null);
  const {id} = useParams();
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        // console.log(response.data);
        setItem(response.data);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };

    fetchItem();
  }, [id]);

  return (
    <div className="container mx-auto">
      {item ? (
        <CardItem item={item} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Items;
