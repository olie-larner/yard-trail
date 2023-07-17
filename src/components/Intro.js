import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { useIntersectionObserver } from "@uidotdev/usehooks";

const Intro = () => {
  const [logo, setLogo] = useState(false);
  const [sectOne, setSectOne] = useState(false);
  const [sectTwo, setSectTwo] = useState(false);
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.8,
    root: null,
  });

  const [sectionOne, sectionOneentry] = useIntersectionObserver({
    threshold: 0.8,
    root: null,
  });

  const [sectionTwo, sectionTwoentry] = useIntersectionObserver({
    threshold: 0.8,
    root: null,
  });

  useEffect(() => {
    if (entry?.isIntersecting === true) {
      setLogo(true);
    }

    if (sectionOneentry?.isIntersecting === true) {
      setSectOne(true);
    }

    if (sectionTwoentry?.isIntersecting === true) {
      setSectTwo(true);
    }
  }, [logo, entry, sectionOneentry, sectionTwoentry]);

  return (
    <div className="w-full py-20 justify-center items-center bg-trail-yellow text-slate-900">
      <div
        ref={ref}
        className={classnames(
          "w-full flex justify-center transition-all duration-500 relative",
          { "opacity-0 top-8": !logo },
          { "opacity-100 top-0": logo }
        )}
      >
        <img
          src="/logos/get-a-yard-on-yellow.png"
          className="w-8/12 md:w-1/3"
          alt=""
        />
      </div>
      <div
        ref={sectionOne}
        className="container w-10/12 mx-auto flex flex-col md:flex-row justify-between pt-11"
      >
        <div className="w-full md:w-1/2 flex justify-start">
          <div
            className={classnames(
              "bg-[url(./images/past-trails/past-two.jpg)] bg-cover rounded-full pt-[100%] md:pt-0 w-full md:h-96 md:w-96 transition-all duration-500 relative",
              { "opacity-0 right-8": !sectOne },
              { "opacity-100 right-0": sectOne }
            )}
          />
        </div>
        <div className="w-full py-12 md:py-0 md:w-1/2 flex justify-center items-center">
          <p
            className={classnames(
              "text-xl font-medium transition-all duration-500 relative",
              { "opacity-0 left-8": !sectOne },
              { "opacity-100 left-0": sectOne }
            )}
          >
            Welcome to the vibrant world of The Yard Trail, where treasure
            awaits around every corner! The Yard Trail is a community-driven
            event that brings together neighbours, friends, and strangers alike,
            all in pursuit of hidden gems and bargains.
          </p>
        </div>
      </div>
      <div
        ref={sectionTwo}
        className="container w-10/12 mx-auto flex flex-col md:flex-row-reverse justify-between"
      >
        <div className="w-full md:w-1/2 flex justify-end">
          <div
            className={classnames(
              "bg-[url(./images/past-trails/past-three.jpg)] bg-cover rounded-full pt-[100%] md:pt-0 w-full md:h-96 md:w-96 transition-all duration-500 relative",
              { "opacity-0 left-8": !sectTwo },
              { "opacity-100 left-0": sectTwo }
            )}
          />
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center py-12 md:py-0">
          <p
            className={classnames(
              "text-xl font-medium transition-all duration-500 relative",
              { "opacity-0 right-8": !sectTwo },
              { "opacity-100 right-0": sectTwo }
            )}
          >
            Whether you're a seasoned thrifter or simply curious about what
            treasures lie waiting, The Yard Trail promises a delightful
            adventure that sparks curiosity, conversations, and brings
            communities together.
          </p>
        </div>
      </div>

      <div className="container w-10/12 mx-auto pt-8 md:pt-16">
        <p className="text-3xl text-center font-semibold italic max-w-lg mx-auto">
          So, join us as we embark on a journey through the vibrant tapestry of
          the Stroud valleys, where the thrill of the hunt is only a step away
          and the possibilities are endless!
        </p>
      </div>
    </div>
  );
};

export default Intro;
