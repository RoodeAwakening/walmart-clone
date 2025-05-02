import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

function Header() {
  return (
    <header>
      <Link href="/">
        <Image
          src="https://link/papareact.com/x9j"
          alt="Walmart Logo"
          width={150}
          height={150}
        />
      </Link>
      <form>
        <input type="text" placeholder="Search Everything..."/>
        <Button className="rounded-full h-10">
            <Search />
        </Button>
      </form>
    </header>
  );
}

export default Header;
