import React from "react";
import { useEffect } from "react";

const Twitter = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    let element = document.getElementsByClassName("twitter-embed")[0]
    if(element){
      element.appendChild(script);
    }
  }, []);
  return (
    <div>

    </div>
  );
};

export default Twitter;
