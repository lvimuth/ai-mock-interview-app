"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Header() {
  const router = useRouter();
  const path = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Detect if the user has scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Clean up
  }, []);

  const headerItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Question", path: "/dashboard/question" },
    { name: "Upgrade", path: "/dashboard/upgrade" },
    { name: "How it works", path: "/dashboard/how" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-gray-50/80 backdrop-blur-md shadow-lg"
          : "bg-gray-50"
      }`}
    >
      <div className="flex p-4 items-center justify-between max-w-screen-xl mx-auto flex-col md:flex-row">
        <Image src={"/logo.svg"} alt="logo" width={160} height={100} />
        <ul className="md:flex gap-6">
          {headerItems.map((item, index) => (
            <li
              key={index}
              onClick={() => router.push(item.path)}
              className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${
                path == item.path && "text-primary font-bold"
              }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
