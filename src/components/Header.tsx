import { LINKS } from "@/utils/constants";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <header className="flex justify-between border p-4">
      <h1>Yamarket</h1>
      <nav>
        <ul className="flex gap-4">
          {LINKS.map((link) => (
            <li key={link.name}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeSwitch />
    </header>
  );
};

export default Header;
