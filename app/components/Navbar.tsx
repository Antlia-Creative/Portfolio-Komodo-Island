"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  className?: string;
}

export default function Navbar(props: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    handleScroll();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }

  return (
    <nav
      className={`flex items-center py-8 px-36 transition duration-300 ${
        isScrolled ? "bg-white/70" : ""
      } ${props.className}`}
    >
      <div className="flex-1">
        <Link href="#explore" className="block w-fit">
          Explore It
        </Link>
      </div>
      <div className="flex-1">
        <Link href="#destination" className="block w-fit">
          Destination
        </Link>
      </div>
      <div className="flex-2">
        <Link href="/">
          <h1 className="font-bold text-4xl">
            <span>KOMODO</span>{" "}
            <span className="text-bright-turquoise">Park</span>
          </h1>
        </Link>
      </div>
      <div className="flex-1">
        <Link href="#about" className="block w-fit ml-auto">
          About Us
        </Link>
      </div>
      <div className="flex-1">
        <Link href="#contact" className="block w-fit ml-auto">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
