import React from "react";

const Footer = () => {
  return (
    <div className=" bg-slate-800 py-12">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row text-white">
        <div className="w-full md:w-1/2">&copy; Stroud Yard Trail 2023</div>
        <div className="pt-3 md:pt-0 md:text-right w-full md:w-1/2">
          Site by{" "}
          <a className=" font-semibold" href="https://olielarner.com">
            Olie Larner
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
