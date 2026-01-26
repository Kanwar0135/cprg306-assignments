import Item from "./GroceryItem";


const Item = ({ name, quantity, category }) => {
  return (
    <li className="flex justify-between items-center p-4 mb-2 bg-white rounded-lg shadow border">
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
      <span>Qty: {quantity}</span>
    </li>
  );
};

export default Item;
