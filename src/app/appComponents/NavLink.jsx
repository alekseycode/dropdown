"use client";
import { useState } from "react";
import Link from "next/link";
import DropDown from "./DropDown";

export default function NavLink({ name, href, dropDownItems }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="p-5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={href}>{name}</Link>
      <div className="flex flex-col absolute">
        {isHovered &&
          dropDownItems &&
          dropDownItems.map((item, i) => (
            <div key={i} className="mt-6 animate-fade-in">
              <DropDown
                href={"/pages/" + name.toLowerCase() + "/" + item}
                name={item}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
