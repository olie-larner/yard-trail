import React, {useState, useEffect} from "react";
import classnames from "classnames";
const Loading = (loading) => {
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    if(!loading.loading){
      setTimeout(() => {
          setDisplay(false);
      }, 1500);
    }
  }, [display, loading])
  
  return (
    <div
      className={classnames(
        "bg-slate-700 text-white w-screen h-screen fixed top-0 left-0 items-center justify-center z-50 transition-opacity duration-700 delay-1000",
        { "opacity-100": loading.loading },
        { "opacity-0": !loading.loading },
        { "flex": display },
        { "hidden": !display }
      )}
    >
      <h2>Loading...</h2>
    </div>
  );
};

export default Loading;
