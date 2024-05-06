import React from 'react';
import { Link } from 'react-router-dom';

const CardItem = ({ item }) => {
  const renderStarRating = (rating) => {
    const filledStars = Math.floor(rating); 
    const remainder = 5 - filledStars; 


    const filledStarsArray = Array.from({ length: filledStars }, (_, index) => (
      <svg
        key={index}
        className="w-4 h-4 text-yellow-300"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    ));

    const emptyStarsArray = Array.from({ length: remainder }, (_, index) => (
      <svg
        key={filledStars + index}
        className="w-4 h-4 text-gray-200 dark:text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    ));

    return [...filledStarsArray, ...emptyStarsArray];
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="#" className="flex justify-center">
          <img className="p-4 w-48 h-auto self-center" src={item?.image} alt="product image" />
        </Link>
        <div className="px-5 pb-5">
          <Link to="#">
            <h4 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item?.category}</h4>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item?.description}</p>
            <h6 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Title: {item?.title}</h6>
          </Link>
          <div className="flex items-center mt-2.5 mb-5">
            {/* Render star rating dynamically */}
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              {renderStarRating(item?.rating.rate)}
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{item?.rating.rate}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">$ {item?.price}</span>
            <Link to="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Back</Link>
            <Link to="" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
