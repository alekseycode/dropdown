import Link from "next/link";
import NavLink from "./NavLink";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center">
      <Link href="/" className=" p-6 ml-20 text-lg">
        Logo
      </Link>
      <div className="flex space-x-10 mr-20">
        <NavLink href="/" name="Home" />
        <NavLink
          href="/pages/projects"
          name="Projects"
          dropDownItems={["projects1", "projects2", "projects3"]}
        />
        <NavLink
          href="/pages/about"
          name="About"
          dropDownItems={["about1", "about2"]}
        />
        <NavLink href="/pages/contact" name="Contact" />
      </div>
    </div>
  );
}
