import NavLink from "./NavLink";

const DesktopNav = () => {
  return (
    <ul className="hidden md:flex items-center gap-8">
      <NavLink navName={"STORY"} href={"/story"} />
      <NavLink navName={"MENU"} href={"/menu"} />
      <NavLink navName={"STORE"} href={"/store"} />
      <NavLink navName={"CONTENT"} href={"/content"} />
    </ul>
  );
};

export default DesktopNav;
