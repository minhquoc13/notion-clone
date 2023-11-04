import React from "react";
import { Heading } from "./_component/heading";
import { Heroes } from "./_component/heroes";
import Footer from "./_component/footer";

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-col justify-center items-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading></Heading>
        <Heroes></Heroes>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MarketingPage;
