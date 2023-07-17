import React from "react";
import { ReactSVG } from "react-svg";
import classnames from "classnames";
import { Link } from "react-router-dom";

const Hero = (trigger) => {
  return (
    <div className=" bg-trail-pink md:h-screen w-full flex flex-col md:flex-row relative">
      <div className="w-full md:w-1/2 h-96 md:h-screen flex justify-center flex-col bg-no-repeat bg-cover bg-bottom bg-[url(./images/past-trails/past-nine.jpg)]">
        <div
          className={classnames(
            "w-full md:w-[50%] absolute top-0 bottom-0 left-0 transition-all duration-500 delay-[2.0s]",
            { "opacity-0": trigger.trigger },
            { "opacity-100": !trigger.trigger }
          )}
        >
          <ReactSVG
            src="./logos/black-logo.svg"
            className={classnames(
              "transition-all relative duration-1000 delay-[2.0s] w-full fill-stone-200",
              { " top-[150px]": trigger.trigger },
              { "top-[100px]": !trigger.trigger }
            )}
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 h-auto md:h-screen flex justify-center flex-col px-8 md:pl-11 py-10">
        <h2 className="font-sans italic text-5xl font-extrabold text-white">
          Monday <br />
          28th August 2023
        </h2>
        <p className="italic font-light pt-7 text-3xl leading-8 text-white">
          Stroud’s town-wide yard sale event <br />
          Sell from your doorstep
          <br />
          Keep stuff out of landfill
          <br />
          Build your community.
          <br />
        </p>

        <Link
          target="_blank"
          className="px-5 py-3 mt-7 text-2xl hover:drop-shadow-lg transition-all ease-out relative bottom-0 hover:bottom-1 font-normal hover:font-semibold italic rounded-full flex w-52 justify-center items-center bg-trail-yellow text-trail-slate"
          to="https://docs.google.com/forms/d/e/1FAIpQLSc8KOCnmuvlayBKLgsF49soBhuVQDZZpXWhs2r7Ey8B6KkSYw/viewform"
        >
          Sign Up!
        </Link>
      </div>
    </div>
  );
};

export default Hero;
