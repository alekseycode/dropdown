import { useState } from "react";
import Link from "next/link";
import NestedDropDown from "./NestedDropDown";

export default function DropDown({ href, name, nestedItems }) {
  const [showNestedDropdown, setShowNestedDropdown] = useState(false);

  return (
    <div
      className="flex flex-col"
      onMouseEnter={() => setShowNestedDropdown(true)}
      onMouseLeave={() => setShowNestedDropdown(false)}
    >
      <Link href={href}>{name}</Link>
      {showNestedDropdown && nestedItems && (
        <div className="absolute left-full">
          {nestedItems.map((item, i) => (
            <div className="mb-6 ml-2 animate-fade-in">
              <NestedDropDown key={i} href={`${href}/${item}`} name={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
