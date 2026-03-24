"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [mode, setMode] = useState("name");

  if (mode === "group") {
    const grouped = {};

    items.forEach(item => {
      if (!grouped[item.category]) grouped[item.category] = [];
      grouped[item.category].push(item);
    });

    return (
      <div className="space-y-6">

        <div className="flex gap-3">
          <button onClick={() => setMode("name")} className="px-4 py-2 border rounded-md bg-white dark:bg-gray-800">
            Sort by Name
          </button>

          <button onClick={() => setMode("category")} className="px-4 py-2 border rounded-md bg-white dark:bg-gray-800">
            Sort by Category
          </button>

          <button className="px-4 py-2 border rounded-md bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900">
            Group by Category
          </button>
        </div>

        {Object.keys(grouped).sort().map(category => (
          <div key={category}>
            <h2 className="font-bold mt-4 capitalize">{category}</h2>

            <ul className="mt-2 space-y-2">
              {grouped[category]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(item => (
                  <Item key={item.id} {...item} onSelect={() => onItemSelect(item)} />
                ))}
            </ul>
          </div>
        ))}

      </div>
    );
  }

  const sorted = [...items].sort((a, b) =>
    mode === "name"
      ? a.name.localeCompare(b.name)
      : a.category.localeCompare(b.category)
  );

  return (
    <div className="space-y-6">

      <div className="flex gap-3">
        <button onClick={() => setMode("name")} className={`px-4 py-2 border rounded-md ${mode === "name" ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900" : "bg-white dark:bg-gray-800"}`}>
          Sort by Name
        </button>

        <button onClick={() => setMode("category")} className={`px-4 py-2 border rounded-md ${mode === "category" ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900" : "bg-white dark:bg-gray-800"}`}>
          Sort by Category
        </button>

        <button onClick={() => setMode("group")} className="px-4 py-2 border rounded-md bg-white dark:bg-gray-800">
          Group by Category
        </button>
      </div>

      <ul className="space-y-2">
        {sorted.map(item => (
          <Item key={item.id} {...item} onSelect={() => onItemSelect(item)} />
        ))}
      </ul>

    </div>
  );
}