import ItemList from "./item-list";

export default function Page() {
  return (
    <main
      className="
        min-h-screen
        bg-red-50 text-red-900
        dark:bg-black dark:text-cyan-200
        p-6
      "
    >
      <h1 className="text-3xl font-bold mb-6 text-center">
        Shopping List
      </h1>

      <div className="mx-auto w-full md:w-1/2">
        <ItemList />
      </div>
    </main>
  );
}