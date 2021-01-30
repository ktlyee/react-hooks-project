import React, { useState } from 'react'

const Categories = ({ categories ,filterItems }) => {
    const [active, setActive] = useState(0)

    const activeStyle = {
        color: 'white',
        backgroundColor: '#008CBA',
    }

    return (
        <div className="category-btn">
            {categories.map((category, index) => {
                return (
                    <button 
                        key={index} 
                        onClick={() => {
                            filterItems(category)
                            setActive(index)
                        }}
                        style={active === index ? activeStyle : null}
                    >
                        {category}
                    </button>
                )
            })}
        </div>
    )
}

export default Categories;