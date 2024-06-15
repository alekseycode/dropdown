import Link from "next/link";

export default function NestedDropDown({ href, name }) {
  return (
    <div className="flex flex-col">
      <Link href={href}>{name}</Link>
    </div>
  );
}
