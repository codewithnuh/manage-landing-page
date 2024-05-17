import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants";
import Button from "./Button";
const Header = () => {
  return (
    <header className="py-4">
      <nav className=" flex items-center justify-between">
        <Image alt="manage" src={"/logo.svg"} width={90} height={90} />
        <ul className="sm:flex items-center hidden space-x-3">
          {navLinks.map((item) => (
            <li key={item.title}>
              <Link
                className="nav__text hover:text-neutral-darkGrayishBlue"
                href={item.href}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <Button variant="primary" className="sm:block hidden">
          Get Started
        </Button>
        <div className="sm:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18">
            <g fill="#242D52" fill-rule="evenodd">
              <path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z" />
            </g>
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;
