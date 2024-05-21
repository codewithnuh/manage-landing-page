import React from "react";
import Button from "./Button";
import Image from "next/image";
import { footerLinks, navLinks, social__links } from "@/constants";
import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer>
      <section className="bg-primary-brightRed px-14 py-10 mt-10">
        <div className=" sm:flex-row sm:justify-between container flex flex-col items-center justify-center px-2 mx-auto">
          <h2 className="h2 break-words">
            Simplify how your team works today.
          </h2>
          <Button variant="secondary" className="mt-6">
            Get Started
          </Button>
        </div>
      </section>
      <div className="bg-neutral-veryDarkBlue">
        <div className="md:flex-row md:space-y-0 container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8">
          {/* <!-- Logo and social links container --> */}
          <div className="md:flex-col md:space-y-0 md:items-start flex flex-col-reverse items-center justify-between space-y-12">
            <div className="md:hidden mx-auto my-6 text-center text-white">
              Copyright &copy; 2022, All Rights Reserved
            </div>
            {/* <!-- Logo --> */}
            <div>
              <Logo className="fill-white" />
            </div>
            {/* <!-- Social Links Container --> */}
            <div className="flex justify-center space-x-4">
              {social__links.map((item) => (
                <Link href={item.href}>
                  <Image
                    src={item.imageUrl}
                    width={32}
                    className="h-8"
                    height={32}
                    alt="Social link"
                  />
                </Link>
              ))}
            </div>
          </div>
          {/* <!-- List Container --> */}
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              {footerLinks.slice(0, 4).map((item) => (
                <Link
                  key={item.title}
                  className="hover:text-primary-brightRed"
                  href={item.href}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col space-y-3 text-white">
              {footerLinks.slice(4).map((item) => (
                <Link
                  key={item.title}
                  className="hover:text-primary-brightRed"
                  href={item.href}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* <!-- Input Container --> */}
          <div className="flex flex-col justify-between">
            <form>
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="focus:outline-none flex-1 px-4 rounded-full"
                  placeholder="Updated in your inbox"
                />
                <Button variant="primary">Go</Button>
              </div>
            </form>
            <div className="md:block hidden text-white">
              Copyright &copy; 2022, All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
