'use client'

import React from "react";
import Image from "next/image";
import YouTube from "react-youtube";

const GenAiPortfolio = () => {
  return (
    <>
      <section className="pb-10 lg:py-15 xl:py-20 px-10">
        <div className="flex flex-row mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20">
          <div className="flex flex-col md:w-1/2">
            <h4 className="text-black dark:text-white text-lg font-medium mb-4.5">
              🔥 Ai Arts
            </h4>
            <h1 className="text-black dark:text-white text-3xl xl:text-hero font-bold mb-5 pr-16">
              Generative AI For Business
              <span className="inline-block relative before:absolute before:bottom-2.5 before:left-0 before:w-full before:h-3 before:bg-titlebg dark:before:bg-titlebgdark before:-z-1 ml-2.5 ">
              </span>
            </h1>
            <p>Genertions. Images. Videos. For Your Business</p>
          </div>
          <div className="flex flex-col md:w-1/2">
            <div className="relative aspect-[700/444]">
              <Image
                className="shadow-solid-l"
                src="/images/hero/hero-dark.svg"
                alt="Hero"
                fill
              />
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default GenAiPortfolio;