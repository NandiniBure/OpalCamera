import React from "react";
import "./banner.css";

export default function Hero() {
  return (
    <div>
      <div id="main" className="relative h-[165vh] w-full">
        {/* Content Section */}
        <div className="hero-section__content flex items-center md:justify-start justify-center md:h-[90vh] h-[60vh] ">
          <div
            className="flex flex-col gap-12 p-8 bsm:px-1 
            md:ml-12 ml-0 text-center md:text-left"
          >
            {/* Text Section */}
            <div
              className="text-[16px] md:text-[24px] text-white z-10 flex 
  justify-center md:justify-start firstAnimation leading-[1.2]"
            >
              <h1 className="text-[2rem] font-sans">
                <span>The first webcam</span>
                <br />
                <span>designed for laptops.</span>
              </h1>
            </div>

            {/* Button */}
            <button
              style={{ animationDuration: "1s" }}
              className="w-52 h-10 pr-1 pl-1 font-sans pt-1 pb-1 bg-yellow-400 rounded-[2.5rem] z-10 open-items mx-auto md:mx-0"
            >
              Available now for $149.
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="image-container absolute left-0 top-0 h-full w-full">
          <picture>
            <source
              media="(min-width: 1888px)"
              srcSet="/hero-4xl.webp"
            ></source>
            <source
              media="(min-width: 1648px)"
              srcSet="/hero-3xl.webp"
            ></source>
            <source
              media="(min-width: 1408px)"
              srcSet="/hero-2xl.webp"
            ></source>
            <source
              media="(min-width: 1000px)"
              srcSet="/hero-1xl.webp"
            ></source>
            <source media="(min-width: 700px)" srcSet="/hero-xl.webp"></source>
            <source media="(min-width: 384px)" srcSet="/hero-sm.webp"></source>
            <img
              src="/hero-sm.webp"
              alt="img"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
