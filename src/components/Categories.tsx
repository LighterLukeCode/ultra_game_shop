import React from "react";

interface CategoriesProps {
  value: string;
  onClickCategory: (id: string) => void;
}

const Categories = ({ value, onClickCategory }: CategoriesProps) => {
  const categories = [
    "Все жанры",
    "Action/RPG",
    "Adventure",
    "Shooter",
    "BattleRoyle",
    "Sport",
    "Simulator",
    "Racing",
    "MMO",
    "RPG",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((title, i) => (
          <li key={i} onClick={() => onClickCategory(title)} className={value === title ? "active" : ""}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
