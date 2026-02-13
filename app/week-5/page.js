import NewItem from "./NewItem";

export default function Page() {
  return (
    <main
      className="
        min-h-screen p-8
        bg-gray-100 text-gray-900
        dark:bg-gray-900 dark:text-gray-100
      "
    >
      <h1 className="text-3xl font-bold mb-6">
        New Shopping Item
      </h1>

      <div className="mx-auto w-full md:w-1/2">
        <NewItem />
      </div>
    </main>
  );
}
