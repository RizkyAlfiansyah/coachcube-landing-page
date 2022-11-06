import { CountdownSection, FooterSection, Hero, SecondSection, SignUpSection } from "components/layouts";
import React, { useRef } from "react";

const Home = () => {
  const ref = useRef(null);

  const _handleRef = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="snap-y snap-mandatory w-screen h-screen overflow-auto overflow-x-hidden">
      {/* Hero section */}
      <section className="lg:snap-start w-full h-screen bg-hero bg-cover bg-no-repeat bg-center flex flex-col items-center justify-between pt-16">
        <Hero onClick={_handleRef} />
      </section>
      {/* second Section */}
      <section className="lg:snap-start w-full flex flex-col h-screen items-center justify-between lg:py-20 lg:px-28 py-8 px-6 bg-primary-50">
        <SecondSection />
      </section>
      <section className="lg:snap-start w-full flex lg:flex-row flex-col min-h-screen items-center justify-between" ref={ref}>
        <SignUpSection />
      </section>
      <section className="lg:snap-start w-full lg:h-screen h-2/4 flex flex-col justify-start items-start z-40">
        <CountdownSection />
      </section>
      <footer className="lg:snap-start w-full flex flex-col justify-start lg:items-start items-center">
        <FooterSection />
      </footer>
    </div>
  );
};

export default Home;
