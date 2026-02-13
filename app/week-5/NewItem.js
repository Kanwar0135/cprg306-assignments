"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function handleSubmit(event) {
    event.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);
    alert(`Added: ${name}, quantity: ${quantity}, category: ${category}`);

    // Reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        p-6 rounded-lg border
        bg-white text-gray-800 border-gray-200
        dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
        space-y-4
      "
    >
      {/* Name Field */}
      <div>
        <label className="block mb-1 font-medium">
          Item Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="
            w-full p-2 rounded-md border
            border-gray-300
            dark:border-gray-600
            dark:bg-gray-700
            focus:outline-none focus:ring-2 focus:ring-gray-400
          "
        />
      </div>

      {/* Quantity + Category Row */}
      <div className="flex gap-4">
        {/* Quantity */}
        <div className="flex-1">
          <label className="block mb-1 font-medium">
            Quantity
          </label>
          <input
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="
              w-full p-2 rounded-md border
              border-gray-300
              dark:border-gray-600
              dark:bg-gray-700
              focus:outline-none focus:ring-2 focus:ring-gray-400
            "
          />
        </div>

        {/* Category */}
        <div className="flex-1">
          <label className="block mb-1 font-medium">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="
              w-full p-2 rounded-md border
              border-gray-300
              dark:border-gray-600
              dark:bg-gray-700
              focus:outline-none focus:ring-2 focus:ring-gray-400
            "
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen foods">Frozen Foods</option>
            <option value="canned goods">Canned Goods</option>
            <option value="dry goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="
          w-full py-2 rounded-md font-semibold
          bg-gray-900 text-white
          hover:opacity-90 transition
          dark:bg-gray-100 dark:text-gray-900
        "
      >
        +
      </button>
    </form>
  );
}
