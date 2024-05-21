import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ menuItems, defaultItem, handleSelect }) => {
  // Filter out the selected item from the list of menu items
  const filteredItems = menuItems.filter((item) => item.name !== defaultItem);

  return (
    <div>
      <ul className="dropdown-menu">
        {/* Render the filtered items */}
        {filteredItems.map((item, index) => (
          <li key={index} onClick={() => handleSelect(item.name)}>
            <Link className={item.cName} to={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
