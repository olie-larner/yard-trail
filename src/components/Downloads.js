import React from "react";
import Download from "../data/download.json";

const Downloads = () => {
  return (
    <div id="posters" className=" bg-trail-pink py-11 md:py-16">
      <div className="container w-10/12 mx-auto">
        <div className="mb-11 md:mb-16 ">
          <h2 className="font-sans mb-7 italic text-5xl font-extrabold text-white">
            Posters
          </h2>
          <p className="w-full md:w-8/12 font-light text-2xl md:text-3xl leading-8 text-white">
            Display our posters to let your neighbours know you are taking part
            in the Yard Trail!
          </p>
        </div>
        <div className="flex justify-around flex-wrap">
          {Download.images.map((file, key) => {
            return (
              <a
                className=" inline-block w-24 md:w-48 mb-4"
                key={key}
                download
                href={file.file}
              >
                <img className="w-full" src={file.thumbnail} alt="poster" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Downloads;
