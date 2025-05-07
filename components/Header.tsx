"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Grid2X2, Heart, LayoutGrid, Search, ShoppingCart, User } from "lucide-react";

function Header() {
  return (
    <header className="flex flex-col md:flex-row bg-walmart px-10 py-7 space-x-5">
      <Link href="/" className="mb-5 md:mb-0">
        <Image
          src="https://links.papareact.com/yur"
          alt="Walmart Logo"
          width={150}
          height={150}
        />
      </Link>
      <form className="flex items-center bg-white rounded-full w-full flex-1">
        <input
          type="text"
          placeholder="Search Everything..."
          className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm"
        />
        <Button type="submit" className="rounded-full h-10 w-10 bg-yellow-400">
          <Search className="text-black" />
        </Button>
      </form>
      <div className="flex space-x-5 mt-5 md:mt-0 justify-evenly">
        <Link
          href={"/"}
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Grid2X2 size={20} />
          <p>Departments</p>
        </Link>
        <Link
          href={"/"}
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <LayoutGrid size={20} />
          <p>Services</p>
        </Link>
        <Link
          href={"/"}
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Heart size={20} />
          <div>
            <p className="text-xs font-extralight">Reorder</p>
            <p>My Items</p>
          </div>
        </Link>
        <Link
          href={"/"}
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <User size={20} />
          <div>
            <p className="text-xs font-extralight">Sign In</p>
            <p>Account</p>
          </div>
        </Link>
        <Link
          href={"/"}
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <ShoppingCart size={20} />
          <div>
            <p className="text-xs font-extralight">No Items</p>
            <p>$0.00</p>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
