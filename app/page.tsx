import { Header, About, Hero, Testmonial, Footer } from "@/components";
const page = () => {
  return (
    <>
      <div className=" container px-2 mx-auto">
        <Header />
        <main>
          <Hero />
          <About />
          <Testmonial />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default page;
