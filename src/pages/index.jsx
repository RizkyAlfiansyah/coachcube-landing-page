import { Hero, SeconSection } from "components/layouts";
import React from "react";

const Home = () => {



  return (
    <div className="snap-y snap-mandatory w-full min-h-screen flex flex-col items-center justify-center bg-gradientPrimary">
      {/* Hero section */}
      <section className="snap-always snap-center w-full relative h-screen bg-hero bg-cover bg-no-repeat bg-center flex flex-col items-center justify-between pt-16">
        <Hero />
      </section>
      {/* second Section */}
      <section className="snap-always snap-center w-full flex flex-col h-screen items-center justify-between py-20 px-28 bg-primary-50">
        <SeconSection />
      </section>
    </div>
  );
};

export default Home;
