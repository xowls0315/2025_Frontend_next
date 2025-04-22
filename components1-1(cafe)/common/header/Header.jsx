import Link from "next/link";
import NavLink from "./NavLink";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm py-10 sticky top-0 z-10">
      <nav className="w-full max-w-5xl mx-auto flex justify-between items-center font-bold">
        <h2 className="text-3xl text-gray-500 hover:text-sky-200 transition-all duration-200 mr-10">
          <Link href={"/"}>IT-cafe</Link>
        </h2>
        <NavLink navName={"STORY"} href={"/story"} />
        <NavLink navName={"MENU"} href={"/menu"} />
        <NavLink navName={"STORE"} href={"/store"} />
        <NavLink navName={"CONTENT"} href={"/content"} />
      </nav>
    </header>
  );
};

export default Header;
