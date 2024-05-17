import { Header, About, Hero, Testmonial } from "@/components";
const page = () => {
  return (
    <div className=" container px-4 mx-auto">
      <Header />
      <main>
        <Hero />
        <About />
        <Testmonial />
      </main>
    </div>
  );
};

export default page;
