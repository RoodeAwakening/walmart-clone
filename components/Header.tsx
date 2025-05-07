"use client";
// recommended to break out the search bar into a separate component and
// then use the "use client" only there

import Image from "next/image";
import Link from "next/link";
import React, { FormEvent } from "react";
import { Button } from "./ui/button";
import {
  Grid2X2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";

function Header() {
    const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.searchInput.value;
    console.log('=======', input);
    router.push(`/search?q=${input}`);
  };

  return (
    <header className="flex flex-col lg:flex-row bg-walmart px-10 py-7 space-x-5">
      <Link href="/" className="mb-5 lg:mb-0 flex justify-center">
        <Image
          src="https://i.imgur.com/5V4wehM.png"
          alt="Walmart Logo"
          width={150}
          height={150}
        />
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white rounded-full w-full flex-1"
      >
        <input
          type="text"
          name="searchInput"
          placeholder="Search Everything..."
          className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm"
        />
        <Button type="submit" className="rounded-full h-10 w-10 bg-yellow-400">
          <Search className="text-black" />
        </Button>
      </form>
      <div className="flex space-x-5 mt-5 lg:mt-0 justify-evenly">
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
          href={"/basket"}
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
