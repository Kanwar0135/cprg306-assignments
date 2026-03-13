"use client";

import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./NewItem";
import MealIdeas from "./MealIdeas";

export default function Page() {

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(item) {

    const cleanedName = item.name
      .split(",")[0]
      .replace(/[^\w\s]/gi, "")
      .trim()
      .split(" ")[0];

    setSelectedItemName(cleanedName);
  }

  return (
    <main
      className="
        min-h-screen
        bg-gray-100 text-gray-900
        dark:bg-black dark:text-gray-100
        p-6
      "
    >

      <h1 className="text-3xl font-bold mb-6 text-center">
        Shopping List
      </h1>

      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-6">

        <div className="space-y-6">
          <NewItem onAddItem={handleAddItem} />

          <ItemList
            items={items}
            onItemSelect={handleItemSelect}
          />
        </div>

        <MealIdeas ingredient={selectedItemName} />

      </div>

    </main>
  );
}