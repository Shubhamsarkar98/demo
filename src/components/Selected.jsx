import React from 'react';

const Selected = ({ data, selectedCategory, onCategoryChange }) => {
    const uniqueCategories = Array.from(new Set(data.map((d) => d.category)));

    const handleChange = (e) => {
        const category = e.target.value;
        onCategoryChange(category);
    };

    return (
        <form className="max-w-sm mx-auto">
            <select
                id="categories"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={selectedCategory}
                onChange={handleChange}
            >
                <option value="">Choose a Category</option>
                {uniqueCategories.map((category, index) => (
                    <option key={index} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </form>
    );
};

export default Selected;
