import React, { useState } from 'react'
import items from './components/data'
import Menu from './components/Menu'
import Categories from './components/Categories'

const allCategories = ['all', ...new Set(items.map(item => item.category))] 

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items)
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <div className="container">
      <div className="section">
        <h1 className="title">Menu</h1>
        <hr></hr>
      </div>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuItems}/>
    </div>
  );
}

export default App;
