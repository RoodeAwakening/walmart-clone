import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

function Header() {
  return (
    <header className="flex bg-walmart">
      <Link href="/">
        <Image
          src="https://links.papareact.com/yur"
          alt="Walmart Logo"
          width={150}
          height={150}
        />
      </Link>
      <form className="flex items-center bg-white rounded-full w-full flex-1">
        <input type="text" placeholder="Search Everything..." className="flex-1" />
        <Button className="rounded-full h-10">
          <Search />
        </Button>
      </form>
    </header>
  );
}

export default Header;
