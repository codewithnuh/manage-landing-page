import { features } from "@/constants";
import React from "react";
const About = () => {
  return (
    <section className="mt-28 sm:grid-cols-2 grid space-y-6">
      <div className="sm:items-baseline flex flex-col items-center justify-center space-y-3">
        <h1 className="heading text-center">What's different about Manage?</h1>
        <p className="paragraph sm:text-left text-center">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made or modern digital product
          teams.
        </p>
      </div>
      <div>
        <div className=" space-y-4">
          {features.map((feature, i) => (
            <>
              <div className="bg-neutral-veryPaleRed sm:bg-transparent ">
                <div className="bg-primary-brightRed text-neutral-veryLightGray inline-block px-6 py-2 rounded-full">
                  {feature.index}
                </div>
                <span className="text-neutral-veryDarkBlue mx-2 text-sm md:text-[1rem]  font-bold">
                  {feature.title}
                </span>
              </div>
              <p className=" paragraph sm:w-full text-left">
                {feature.description}
              </p>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;
