"use client";

import { useState } from "react";
import itemsData from "./items.json";
import ItemList from "./item-list";
import NewItem from "./NewItem";

export default function Page() {

  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
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

      <div className="mx-auto w-full md:w-1/2 space-y-6">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}