import React from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    router.push("/login");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <h3 className="text-5xl 2xl:text-5xl font-bold leading-9 tracking-tight text-gray-900">
          WikiBands
        </h3>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            onClick={handleLogout} // Add this line to connect the logout function
            className="flex w-full justify-center rounded-md bg-orange-900 px-10 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            Log Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
