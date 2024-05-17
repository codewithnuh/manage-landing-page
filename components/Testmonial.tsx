import React from "react";
import Image from "next/image";
const Testmonial = () => {
  return (
    <section className="mt-10">
      <h2 className="heading">What they've said</h2>
      <div className="testmonials">
        <div className="mt-14 flex flex-col items-center">
          <Image alt="profile" width={50} height={50} src={"/avatar-ali.png"} />
          <span className="text-neutral-veryDarkBlue mt-4 font-bold">
            Ali Bravo
          </span>
          <p>
            "Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testmonial;
