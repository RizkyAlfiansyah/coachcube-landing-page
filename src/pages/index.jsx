import { CountdownSection, FooterSection, Hero, SecondSection, SignUpSection } from "components/layouts";
import React, { useRef, useState } from "react";

const Home = () => {
  const ref = useRef(null);
  const [tabs, setTabs] = useState(0);

  const _handleRef = (value) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setTabs(value);
  };

  return (
    <div className="snap-y snap-mandatory w-screen h-screen overflow-auto overflow-x-hidden">
      {/* Hero section */}
      <section className="w-full md:h-screen h-[110vh] bg-hero bg-cover bg-no-repeat bg-center flex flex-col items-center justify-between lg:pt-16 pt-10">
        <Hero onClick={(value) => _handleRef(value)} />
      </section>
      {/* second Section */}
      <section className="w-full flex flex-col md:h-[80vh] lg:h-screen items-center justify-between xl:py-20 lg:px-8 lg:gap-24 py-8 px-2 md:px-12 md:py-8 bg-primary-50">
        <SecondSection />
      </section>
      <section className="w-full flex lg:flex-row flex-col items-center justify-between" ref={ref}>
        <SignUpSection datas={[tabs, setTabs]} />
      </section>
      <section className="w-full lg:h-[90%] h-2/4 flex flex-col justify-start items-start z-40">
        <CountdownSection />
      </section>
      <footer className="w-full flex flex-col justify-start xl:items-start items-center">
        <FooterSection />
      </footer>
    </div>
  );
};

export default Home;
