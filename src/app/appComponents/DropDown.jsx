import Link from "next/link";

export default function DropDown({ name, href }) {
  return (
    <div className="flex flex-col">
      <Link href={href}>{name}</Link>
    </div>
  );
}
