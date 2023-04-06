import { Autocomplete } from "@react-google-maps/api";
import React from "react";

function Header() {
  return (
    <nav className="block lg:flex justify-between flex-wrap bg-teal-700 p-2">
      <div class="flex items-center text-white mr-6">
        <span class="font-semibold text-xl tracking-tight">Travel Friend</span>
      </div>
      <div class=" flex-grow lg:flex md:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow"></div>

        <a
          href="#responsive-header"
          class="block md:mt-4 md:mr-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
          Explore new places.
        </a>
        {/* <Autocomplete> */}
        <div className="flex justify-center items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            className="shadow appearance-none border-blue-900 rounded py-1 px-2 text-gray-700 "
            id="text"
            type="text"
            placeholder="Search..."
          />
        </div>
        {/* </Autocomplete> */}
      </div>
    </nav>
  );
}

export default Header;
