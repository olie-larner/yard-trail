import React from "react";

const SuperYard = () => {
  return (
    <div id="super-yard" className=" bg-trail-yellow pt-11 md:pt-16">
      <div className="container w-10/12 mx-auto text-center pb-11 md:pb-16">
        <h2 className="font-sans text-8xl md:text-9xl text-center font-extrabold italic text-trail-pink mb-8">
          SUPER YARD
        </h2>
        <div className="text-center">
          <p className="text-slate-900 text-5xl font-bold mb-10">
            New Mills, Libbys Dr, Stroud GL5 1RN
          </p>

          <p className="text-slate-900 text-2xl md:w-8/12 mx-auto">
            Come and check out this years <strong>SUPER YARD</strong>, with
            loads of amazing stalls, delicous food and refreshments. A perfect
            chance to recharge your batteries, check out some goodies and grab a
            bite to eat.
          </p>
        </div>
      </div>
      <div className="bg-[url(./images/past-trails/superyard.jpg)] h-48 md:h-72 w-full bg-cover bg-top md:bg-center" />
    </div>
  );
};

export default SuperYard;
