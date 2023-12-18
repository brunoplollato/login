"use client";

import { signOut } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signOut();

      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };
  return (
    <>
      {error && (
        <p className="text-center bg-red-300 py-4 mb-6 rounded">{error}</p>
      )}
      <button
        type="button"
        style={{ backgroundColor: `${loading ? "#ccc" : "#3446eb"}` }}
        className="inline-block px-7 py-4 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
        disabled={loading}
        onClick={handleClick}
      >
        {loading ? "loading..." : "Logout"}
      </button>
    </>
  );
};

export default LogoutButton;
