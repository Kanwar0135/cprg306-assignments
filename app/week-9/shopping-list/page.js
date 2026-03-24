"use client";

import { useUserAuth } from "../../contexts/AuthContext";
export default function Page() {
  const { user, loading, gitHubSignIn: login, logout } = useUserAuth();

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100">
        <p className="animate-pulse">Loading...</p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100">

        <h1 className="text-3xl font-bold mb-6">
          Week 9 Login
        </h1>

        <button
          onClick={login}
          className="
            px-6 py-3 rounded-md
            bg-gray-900 text-white
            hover:opacity-90 transition
            dark:bg-gray-100 dark:text-black
          "
        >
          Login with GitHub
        </button>

      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100 space-y-6">

      <h1 className="text-3xl font-bold">Welcome</h1>

      <p>{user.displayName}</p>
      <p className="text-sm opacity-70">{user.email}</p>

      <img
        src={user.photoURL}
        alt="profile"
        className="w-20 h-20 rounded-full"
      />

      <div className="flex flex-col items-center gap-4">


        <button
          onClick={logout}
          className="
            px-6 py-2 rounded-md
            bg-red-500 text-white
            hover:bg-red-600
            transition
          "
        >
          Logout
        </button>


        <a
          href="/week-9/shopping-list"
          className="
            px-6 py-2 rounded-md
            bg-gray-900 text-white
            hover:opacity-90
            dark:bg-gray-100 dark:text-black
            transition
          "
        >
          Go to Shopping List
        </a>

      </div>

    </main>
  );
}