

"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
  const totalItem = useSelector((state: any) => state.cart.totalItem);

  return (
    <div className="flex z-20 justify-between items-center sticky top-0 w-full shadow-lg py-8 text-violet-700 bg-white px-4">
      <div className="font-bold">Next-js</div>
      <div className="space-x-6 flex">
        <Link href="/" className="font-semibold">Home</Link>
        <Link href="/cart" className="font-semibold relative">
          {totalItem > 0 && (
            <h1 className="bg-red-600 text-white rounded-full h-5 w-5 flex text-sm justify-center items-center absolute top-[-16px] right-[-6px]">
              {totalItem}
            </h1>
          )}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;


