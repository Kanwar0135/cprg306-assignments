import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen px-8 py-10 
      bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-gray-100
    ">

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-2">
        React Assignments
      </h1>

      <p className="mb-10 text-gray-600 dark:text-gray-400">
        Select a week to view the assignment
      </p>

      {/* Week cards */}
      <div className="flex flex-col gap-6 max-w-sm">

        {/* Week 2 */}
        <Link
          href="/week-2"
          className="
            block p-6 rounded-xl shadow-md transition
            bg-red-600 text-white
            hover:bg-red-700
            dark:bg-red-500 dark:hover:bg-red-400
          "
        >
          <h2 className="text-xl font-semibold">Week 2</h2>
          <p className="mt-1 text-red-100 dark:text-red-200">
            Student Information
          </p>
        </Link>

        {/* Week 3 */}
        <Link
          href="/week-3"
          className="
            block p-6 rounded-xl shadow-md transition
            bg-cyan-600 text-white
            hover:bg-cyan-700
            dark:bg-cyan-500 dark:hover:bg-cyan-400
          "
        >
          <h2 className="text-xl font-semibold">Week 3</h2>
          <p className="mt-1 text-green-100 dark:text-green-200">
            Grocery List
          </p>
        </Link>

        {/* Week 4 */}
        <Link
          href="/week-4"
          className="
            block p-6 rounded-xl shadow-md transition
            bg-green-600 text-white
            hover:bg-green-700
            dark:bg-green-500 dark:hover:bg-green-400
          "
        >
          <h2 className="text-xl font-semibold">Week 4</h2>
          <p className="mt-1 text-white-100 dark:text-white-200">
            Grocery Catogery List
          </p>
        </Link>

        {/* Week 5 */}
        <Link
          href="/week-5"
          className="
            block p-6 rounded-xl shadow-md transition
            bg-purple-600 text-white
            hover:bg-purple-700
            dark:bg-purple-500 dark:hover:bg-purple-400
          "
        >
          <h2 className="text-xl font-semibold">Week 5</h2>
          <p className="mt-1 text-white-100 dark:text-white-200">
            Add new items
          </p>
        </Link>


      </div>
    </main>
  );
}
