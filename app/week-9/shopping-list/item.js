export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="
        flex justify-between items-center p-4 mb-2 rounded-lg border
        bg-white text-gray-800 border-gray-200
        dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
        cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700
      "
    >
      <p className="font-semibold">{name}</p>
      <p>Quantity: {quantity}</p>
      <p className="capitalize text-sm opacity-80">
        Category: {category}
      </p>
    </li>
  );
}