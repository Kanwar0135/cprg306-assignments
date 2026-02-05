export default function Item({ name, quantity, category }) {
  return (
    <li
      className="
        p-4 rounded-lg shadow
        bg-white text-purple-900
        dark:bg-purple-900 dark:text-purple-100
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