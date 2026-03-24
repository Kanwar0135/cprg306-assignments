'use client'

import { useState } from 'react'
import itemsData from './items.json'

export default function Page() {
  const [items, setItems] = useState(itemsData)
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [category, setCategory] = useState('produce')
  const [selectedItem, setSelectedItem] = useState(null)

  // ➕ Add item
  function handleAdd(e) {
    e.preventDefault()

    const newItem = {
      id: Date.now().toString(),
      name,
      quantity,
      category
    }

    setItems([...items, newItem])
    setName('')
    setQuantity(1)
    setCategory('produce')
  }

  // 🔤 Sort
  function sortByName() {
    setItems([...items].sort((a, b) => a.name.localeCompare(b.name)))
  }

  function sortByCategory() {
    setItems([...items].sort((a, b) => a.category.localeCompare(b.category)))
  }

  function groupByCategory() {
    sortByCategory()
  }

  // 🍽 Meal Ideas based on ingredient
  function getMealIdeas(itemName) {
    const name = itemName.toLowerCase()

    if (name.includes('broccoli')) {
      return [
        "Beef and Broccoli Stir-Fry",
        "Beef Sunday Roast",
        "Broccoli & Stilton soup",
        "Chicken Alfredo Primavera",
        "Drunken noodles (pad kee mao)",
        "Honey Balsamic Chicken with Crispy Broccoli & Potatoes",
        "Tofu, greens & cashew stir-fry"
      ]
    }

    if (name.includes('chicken')) {
      return [
        "Grilled Chicken",
        "Chicken Curry",
        "Chicken Alfredo Pasta"
      ]
    }

    if (name.includes('banana')) {
      return [
        "Banana Smoothie",
        "Banana Pancakes"
      ]
    }

    return ["No meal ideas available"]
  }

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100 p-8">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Shopping List
      </h1>

      <div className="flex gap-10 justify-center">

        {/* LEFT */}
        <div className="w-full max-w-xl">

          {/* FORM */}
          <form onSubmit={handleAdd} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow mb-6">
            <label className="block mb-2">Item Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full mb-4 p-2 border rounded"
            />

            <div className="flex gap-4 mb-4">
              <div className="flex-1">
                <label>Quantity</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div className="flex-1">
                <label>Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="produce">Produce</option>
                  <option value="bakery">Bakery</option>
                  <option value="dairy">Dairy</option>
                  <option value="meat">Meat</option>
                  <option value="household">Household</option>
                </select>
              </div>
            </div>

            <button className="w-full bg-gray-900 text-white py-2 rounded hover:opacity-90 dark:bg-gray-100 dark:text-black">
              + Add Item
            </button>
          </form>

          {/* SORT */}
          <div className="flex gap-4 mb-6">
            <button onClick={sortByName} className="px-4 py-2 bg-gray-900 text-white rounded">
              Sort by Name
            </button>

            <button onClick={sortByCategory} className="px-4 py-2 border rounded">
              Sort by Category
            </button>

            <button onClick={groupByCategory} className="px-4 py-2 border rounded">
              Group by Category
            </button>
          </div>

          {/* ITEMS */}
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="bg-white dark:bg-gray-900 p-4 rounded shadow flex justify-between cursor-pointer hover:scale-[1.01] transition"
              >
                <span className="font-semibold">{item.name}</span>
                <span>Quantity: {item.quantity}</span>
                <span>Category: {item.category}</span>
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT — MEAL IDEAS */}
        <div className="w-80">
          <h2 className="text-xl font-semibold mb-4">Meal Ideas</h2>

          {selectedItem ? (
            <div>
              <p className="mb-2 font-medium">
                Ingredient: {selectedItem.name}
              </p>

              <ul className="space-y-2">
                {getMealIdeas(selectedItem.name).map((meal, i) => (
                  <li key={i}>{meal}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="opacity-70">Click an item to see meal ideas</p>
          )}
        </div>

      </div>

    </main>
  )
}