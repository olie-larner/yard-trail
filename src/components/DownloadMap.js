import React from "react";

const DownloadMap = () => {
  return (
    <div id="download-map" className=" bg-trail-pink pt-11 md:pt-16">
      <div className="container w-10/12 mx-auto text-center pb-11 md:pb-16">
        <h2 className=" text-7xl md:text-8xl font-sans font-bold text-white mb-8">
          The Map
        </h2>
        <p className=" text-2xl text-white text-center mx-auto md:w-1/2 mb-5">
          Here it is, your guide to the ever growing world of the Yard Trail,
          the 2023 Map. Either use our online version or download and print a
          hard copy
        </p>
        <a
          target="_blank"
          className="relative bottom-0 flex items-center mx-auto justify-center px-5 py-3 text-2xl italic font-normal transition-all ease-out rounded-full mt-7 hover:drop-shadow-lg hover:bottom-1 hover:font-semibold w-52 bg-trail-yellow text-trail-slate"
          href="../images/downloads/YARD_TRAIL_MAP_2023_A4Print.pdf"
        >
          Download Map
        </a>
      </div>
    </div>
  );
};

export default DownloadMap;
