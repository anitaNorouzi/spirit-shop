import React from "react";
import Link from "next/link";
import { LuSparkles } from "react-icons/lu";

const Header = () => {
  return (
    <header className="container mx-auto py-4 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2">
        <LuSparkles className="h-6 w-6 text-magic-purple" />
        <span className="font-bold text-xl text-magic-purple">Spirit Shop</span>
      </Link>

      <Link
        href="/mystery-potion"
        className="px-4 py-2 rounded-lg bg-secondary text-foreground 
      hover:bg-secondary/80 translation-colors "
      >
        Mystery Potion 🔥
      </Link>
    </header>
  );
};

export default Header;
