import React, { useState, useEffect } from "react";
import MultiImage from "../images/multi-yard.png";
import classnames from "classnames";
import { useIntersectionObserver } from "@uidotdev/usehooks";

const MultiYards = () => {
  const [multiYard, setMultiYard] = useState(false);

  const [multi, multiEntry] = useIntersectionObserver({
    threshold: 0.8,
    root: null,
  });

  useEffect(() => {
    if (multiEntry?.isIntersecting === true) {
      setMultiYard(true);
    }
  }, [multiEntry, multi]);

  return (
    <div id="multi-yards" className="bg-trail-pink py-16">
      <div className="container w-10/12 mx-auto">
        <img
          ref={multi}
          src={MultiImage}
          alt="mutli-yard"
          className={classnames(
            "mx-auto transition-all duration-500 relative",
            { "opacity-0 top-8": !multiYard },
            { "opacity-100 top-0": multiYard }
          )}
        />
        <h2 className="font-sans mb-7 mt-10 italic text-4xl md:text-5xl text-center font-extrabold text-white">
          No yard? <br className="md:hidden" />
          Not a problem!
        </h2>
        <p className="w-full md:w-7/12 mx-auto text-center font-light text-2xl md:text-3xl leading-8 text-white">
          If you are yardless and still wish to get involved, you can grab a
          free space to sell your gems at one of our{" "}
          <span className=" font-bold">Mutli-Yards</span>.
          <br />
          Get in contact with your nearest venue from below to get selling:
        </p>
        <div className="w-full md:w-9/12 mx-auto text-center">
          <p className="font-sans mb-3 mt-7 italic text-4xl text-center font-extrabold text-white">
            Crown and Sceptre
          </p>
          <a
            className="font-sans text-xl md:text-3xl text-center font-semibold text-white"
            href="mailto:roddathomas@yahoo.co.uk"
          >
            roddathomas@yahoo.co.uk
          </a>

          <p className="font-sans mb-3 mt-7 italic text-4xl text-center font-extrabold text-white">
            Stroud Rugby Club
          </p>
          <a
            className="font-sans text-xl md:text-3xl text-center font-semibold text-white"
            href="mailto:Events@stroudrugby.co.uk"
          >
            Events@stroudrugby.co.uk
          </a>

          <p className="font-sans mb-3 mt-7 italic text-4xl text-center font-extrabold text-white">
            Stroud Brewery
          </p>
          <a
            className="font-sans text-xl md:text-3xl text-center font-semibold text-white"
            href="mailto:richard@stroudbrewery.co.uk"
          >
            richard@stroudbrewery.co.uk
          </a>
        </div>
      </div>
    </div>
  );
};

export default MultiYards;
