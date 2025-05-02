import { Image, Link } from "lucide-react";
import React from "react";

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
    </header>
  );
}

export default Header;
