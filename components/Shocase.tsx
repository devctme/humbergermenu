"use client";

import { useState } from "react";

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const products = [
    { id: 1, name: "react app", title: "web designer", category: "React" },
    { id: 1, name: "react website", category: "React" },
    { id: 1, name: "react home", category: "React" },
    { id: 1, name: "react goood", category: "React" },
    { id: 2, name: "Product 2", category: "Next.js" },
    { id: 3, name: "Product 3", category: "view.js" },
    { id: 4, name: "Product 4", category: "view.js" },
    // Add more products and categories as needed
  ];

  const categories = [
    "all",
    "React",
    "Next.js",
    "view.js",
    // Add more categories as needed
  ];

  const handleClick = (category: string) => {
    setActiveCategory(category);
  };

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div>
      <ul className="flex justify-around bg-slate-300 py-5 ">
        {categories.map((category) => (
          <li
            key={category}
            className={
              activeCategory === category
                ? "active text-red-600 cursor-pointer "
                : "cursor-pointer "
            }
            onClick={() => handleClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
      <div className=" bg-slate-400 m-auto flex gap-5">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-gray-400 w-96 h-96 ">
            <h1>{product.name}</h1>
            <h2>{product.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
