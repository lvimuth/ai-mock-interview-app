"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);

  const headerItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Question", path: "/dashboard/question" },
    { name: "Upgrade", path: "/dashboard/upgrade" },
    { name: "How it works", path: "/dashboard/how" },
  ];
  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-md flex-col md:flex-row">
      <Image src={"/logo.svg"} alt="logo" width={160} height={100} />
      <ul className="md:flex gap-6">
        {headerItems.map((item, index) => (
          <li
            key={index}
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
  );
}

export default Header;
