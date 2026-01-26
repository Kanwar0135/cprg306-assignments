export default function Item({ name, quantity, category }) {
  return (
    <li className="
      flex justify-between items-center p-4 mb-2 rounded-lg border
      bg-white text-gray-800 border-gray-200
      dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
    ">
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {category}
        </p>
      </div>
      <span className="font-medium">Qty: {quantity}</span>
    </li>
  );
}
