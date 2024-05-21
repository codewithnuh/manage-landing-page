"use client";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants";
import Button from "./Button";
import { useState } from "react";
const Header = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
    console.log(show);
  };
  return (
    <header className="py-4">
      <div className="bg-slate-500 absolute w-screen"></div>
      <nav className=" flex items-center justify-between">
        <Image alt="manage" src={"/logo.svg"} width={90} height={90} />
        {show && (
          <ul className="bg-neutral-veryPaleRed sm:hidden  p-[6rem] right-[90px]  top-[70px] absolute mx-auto shadow-sm rounded-lg">
            {navLinks.map((item) => (
              <li key={item.title}>
                <Link
                  className="nav__text hover:text-neutral-darkGrayishBlue text-center"
                  href={item.href}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
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
        <div className="sm:hidden" onClick={() => handleClick()}>
          {show === true ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22">
              <path
                fill="#242D52"
                fill-rule="evenodd"
                d="M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="18">
              <g fill="#242D52" fill-rule="evenodd">
                <path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z" />
              </g>
            </svg>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
