import { CountdownSection, FooterSection, Header, Hero, SecondSection, SignUpSection, ThirdSection } from "components/layouts";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

const Home = () => {
  const ref = useRef(null);
  const [tabs, setTabs] = useState(0);
  const router = useRouter();

  const _handleRef = (value) => {
    // ref.current?.scrollIntoView({ behavior: "smooth" });
    router.push(value);
    setTabs(value);
  };

  return (
    <>
      <div className="snap-y snap-mandatory w-screen h-screen overflow-auto overflow-x-hidden">
        <section className="w-full md:h-auto min-h-[60vh] bg-hero bg-cover bg-no-repeat bg-center flex flex-col items-center justify-start lg:gap-[166px] md:gap-[87px] gap-20 lg:pt-16 pt-10">
          <Hero onClick={(value) => _handleRef(value)} />
        </section>
        <section className="w-full flex flex-col items-center justify-start xl:py-20 lg:px-8 xl:gap-24 md:gap-16 py-8 lg:pb-16 px-2 md:px-12 bg-primary-50">
          <SecondSection />
        </section>
        <section className="w-full flex flex-col items-center justify-start bg-white">
          <ThirdSection />
        </section>
        {/* <section className="w-full flex lg:flex-row flex-col items-center justify-between" ref={ref}>
          <SignUpSection datas={[tabs, setTabs]} />
        </section> */}
        <section className="w-full flex flex-col justify-start items-start py-16 bg-countdown bg-cover bg-no-repeat bg-center">
          <CountdownSection />
        </section>
        <footer className="w-full flex flex-col justify-start xl:items-start items-center">
          <FooterSection />
        </footer>
      </div>
    </>
  );
};

export default Home;
