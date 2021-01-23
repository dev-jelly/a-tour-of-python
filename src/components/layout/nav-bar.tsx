import React from "react";
export default function NavBar() {
  return (
    <nav
      className="relative flex items-center justify-between sm:h-10 lg:justify-start bg-blue-400"
      aria-label="Global"
    >
      <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
        <a href="#" className="font-bold text-gray-700 hover:text-gray-900">
          A Tour of Python
        </a>
      </div>
    </nav>
  );
}
