"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );

  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function load() {
      if (!ingredient) {
        setMeals([]);
        return;
      }

      try {
        const result = await fetchMealIdeas(ingredient);
        setMeals(result);
      } catch (err) {
        console.error(err);
        setMeals([]);
      }
    }

    load();
  }, [ingredient]);

  return (
    <div
      className="
        p-6 rounded-lg border
        bg-white text-gray-800 border-gray-200
        dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
      "
    >
      <h2 className="text-xl font-bold mb-4">Meal Ideas</h2>

      {ingredient && (
        <p className="mb-3 text-sm opacity-80">
          Ingredient: {ingredient}
        </p>
      )}

      <ul className="space-y-2">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="p-2 rounded border bg-gray-50 dark:bg-gray-700"
          >
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}