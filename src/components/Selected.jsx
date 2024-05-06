import React from 'react';

const Selected = ({ data }) => {

    const uniqueCategories =Array.from(new Set(data.map((d)=>{
        return d.category
    })))
    return (
        <form className="max-w-sm mx-auto">
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a Category</option>
                {uniqueCategories.map((category, ind) => {
                    return <option key={ind} value={category}>{category}</option>;
                })}
            </select>
        </form>
    );
};

export default Selected;
