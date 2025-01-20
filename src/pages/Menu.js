import React, { useState, useEffect } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";

import "../styles/Menu.css";

function Menu() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(MenuList);
  const itemsPerPage = 12;

  // Get unique categories
  const categories = ["All", ...new Set(MenuList.map((item) => item.category))];

  useEffect(() => {
    const filtered =
      selectedCategory === "All"
        ? MenuList
        : MenuList.filter((item) => item.category === selectedCategory);
    setFilteredItems(filtered);
    setCurrentPage(1);
  }, [selectedCategory]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>

      {/* Category filter */}
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? "default" : "outline"}
            className="m-1"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menuList">
        {currentItems.map((menuItem) => (
          <MenuItem
            key={menuItem.id}
            id={menuItem.id}
            image={menuItem.image}
            name={menuItem.name}
            price={menuItem.price}
          />
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Menu;
