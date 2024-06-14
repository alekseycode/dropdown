import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center">
      <div className=" p-6 ml-20 text-lg">Logo</div>
      <div className="flex space-x-10  mr-20">
        <Link href="/">Home</Link>
        <Link href="/pages/projects">Projects</Link>
        <Link href="/pages/about">About</Link>
        <Link href="/pages/contact">Contact</Link>
      </div>
    </div>
  );
}
