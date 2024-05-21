"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";
import { testmonials } from "@/constants";
import { useState } from "react";
const Testmonial = () => {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(true);
  return (
    <section id="cta" className="flex flex-col items-center mt-10">
      <h2 className="heading ">What they've said</h2>
      <div className="testmonials mt-28">
        {testmonials.map((item, i) => (
          <div className="mt-14 bg-neutral-veryPaleRed p-9 relative flex flex-col items-center">
            <Image
              alt="profile"
              width={50}
              height={50}
              src={item.imageUrl}
              className="-top-12 absolute w-20"
            />
            <span className="text-neutral-veryDarkBlue mt-4 font-bold">
              {item.profileName}
            </span>
            <p className="paragraph text-center">{item.feedback}</p>
          </div>
        ))}
        <div className="w-4 h-4 border-2 border-red-600 rounded-full"></div>
      </div>
      <Button variant="primary" className="mt-7">
        Get Started
      </Button>
    </section>
  );
};

export default Testmonial;
