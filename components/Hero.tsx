import Image from "next/image";
import Button from "./Button";
const Hero = () => {
  return (
    <section className=" sm:grid-cols-2 grid items-center content-center">
      <div className="sm:order-2">
        <Image
          src={"/illustration-intro.svg"}
          width={300}
          height={200}
          alt="hero im"
          className="md:mx-4 w-full h-auto"
        />
      </div>

      <div className="sm:order-1 sm:items-baseline flex flex-col items-center justify-center space-y-3">
        <h1 className="heading text-balance">
          Bring everyone together to build better products.
        </h1>
        <p className="paragraph">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view
        </p>
        <Button type="button" variant="primary" className="font-bold">
          Get Started
        </Button>
      </div>
    </section>
  );
};
export default Hero;
