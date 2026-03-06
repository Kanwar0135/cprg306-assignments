"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {

  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {

    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }

    return 0;

  });

  return (
    <div className="space-y-6">

      <div className="flex gap-3">

        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-md border ${sortBy === "name"
              ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
              : "bg-white dark:bg-gray-800"
            }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-md border ${sortBy === "category"
              ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900"
              : "bg-white dark:bg-gray-800"
            }`}
        >
          Sort by Category
        </button>

      </div>

      <ul className="space-y-2">
        {sortedItems.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </ul>

    </div>
  );
}