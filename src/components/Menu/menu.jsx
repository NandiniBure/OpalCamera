import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Footer from "../footer/Footer";
import "./menu.css"; // Import the CSS for animations

function Menu({isComponentVisible,setComponentVisible}) {
  const Footerdata = [
    {
      title: "Products",
      content: ["Tadpole", "Opal C1", "Composer"],
    },
    {
      title: "Company",
      content: ["About", "Terms", "Privacy"],
    },
    {
      title: "Resources",
      content: ["Support", "Media Kit", "Downloads", "Newsletter"],
    },
    {
      title: "Social",
      content: ["Instagram", "Twitter "],
    },
  ];

  const products = [
    { name: "Tadpole", image: "./opalc1.png" },
    { name: "C1", image: "./opalc2.png" },
    { name: "Composer", image: "./opalc3.png" },
  ];
const [isClosing, setIsClosing] = useState(false);
  // Intersection observers for animations
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });

   const handleClose = () => {
     setIsClosing(true); // Start the closing animation
     setTimeout(() => {
       setComponentVisible(false); // Actually hide the component after the animation
       setIsClosing(false); // Reset the state for the next open
     }, 500); // Match this timeout to the CSS animation duration
   };


  return (
    <>
      <div
        className={`min-h-screen bg-white flex flex-col items-center transition-transform duration-500 ${
          isClosing ? "animate-close" : "animate-open"
        }`}
      >
        <div className="max-w-4xl w-full mx-auto bg-white">
          <header className="flex h-[3.5rem] justify-between items-center px-4 border-b gap-4">
            <h1 className="text-3xl font-sans font-bold">Opal</h1>

            <button onClick={handleClose} className="text-4xl font-semibold">
              ×
            </button>
            <svg
              viewBox="0 0 30 24"
              className="w-[23px] deep:fill-white bg-invert-style"
            >
              <g clipPath="url(#a)">
                <path
                  fillRule="evenodd"
                  d="M21.96 5.306A12 12 0 0 0 11.398.014C5.191.318.178 5.447.005 11.66-.182 18.443 5.26 23.999 12 23.999c4.15 0 7.807-2.107 9.96-5.306l-9.813-6.416a.333.333 0 0 1 0-.554l9.813-6.415a11.9 11.9 0 0 1 2.04 6.69c0 2.48-.75 4.78-2.04 6.694l7.52 5.249c.223.147.52-.01.52-.277V.334a.333.333 0 0 0-.52-.277z"
                  clipRule="evenodd"
                />
              </g>
            </svg>
          </header>

          <div className="space-y-1 flex-grow px-4">
            {/* Component 1 */}
            <div
              ref={ref1}
              className={`flex h-[8.7rem] items-center justify-between bg-gray-50 px-10 pt-[0.1rem] rounded-sm transition-transform duration-700 ${
                inView1 ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <p className="text-xl  font-sans font-medium">Tadpole</p>
              <img
                src="./opalc1.png"
                alt="Tadpole"
                className="h-full w-[5.2rem] object-cover rounded-md"
              />
            </div>

            {/* Component 2 */}
            <div
              ref={ref2}
              className={`flex h-[6.8rem] items-center mt-[0.1rem] justify-between bg-gray-50 px-10 py-1 rounded-sm transition-transform duration-700 ${
                inView2 ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <p className="text-xl font-sans font-medium">C1</p>
              <img
                src="./opalc2.png"
                alt="C1"
                className="h-full object-cover rounded-md"
              />
            </div>

            {/* Component 3 */}
            <div
              ref={ref3}
              className={`flex h-[9rem] mt-1 items-center justify-between bg-gray-50 px-10 py-5 rounded-sm transition-transform duration-700 ${
                inView3 ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <p className="text-xl font-sans font-medium">Composer</p>
              <img
                src="./opalc3.png"
                alt="Composer"
                className="h-full object-cover rounded-md"
              />
            </div>
          </div>

          {/* Component 4 (Footer) */}
          <div
            ref={ref4}
            className={`footer  bg-white px-0 lg:px-20 transition-transform duration-700 ${
              inView4 ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <div className="footer-menu w-full px-2 bg-white flex justify-between">
              <div className="right-section md:w-1/2 w-full basis-[100%] sm:basis-[50%] md:basis-1/2 py-6 md:p-0">
                <div className="text-xs font-sans font-semibold flex justify-around leading-6">
                  {Footerdata?.map((curr, index) => (
                    <ul key={index}>
                      <li className="mb-3 text-neutral-400">{curr.title}</li>
                      {curr.content.map((newElement, index) => (
                        <a key={index} href="#">
                          <li className="hover:text-neutral-400">
                            {newElement}
                          </li>
                        </a>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
              <div className="left-section h-60 md:w-1/2 w-full sm:basis-[40%] sm:flex hidden flex-col mt-5 justify-between basis-[30%]">
                <div className="upper-section flex flex-col md:gap-4 gap-1 w-full">
                  <h3 className="text-[20px] font-sans font-bold">
                    Subscribe to the
                    <br />
                    Opal Newsletter
                  </h3>
                  <p className="text-[13px] text-neutral-400">
                    Latest news, musings, announcements <br /> and updates
                    direct to your inbox.
                  </p>
                  <button
                    className={`w-28 h-12 bg-[#080404] mt-5 hover:bg-yellow-400 rounded-3xl justify-center items-center flex`}
                  >
                    <svg
                      width="40"
                      height="80"
                      fill="#fff"
                      viewBox="0 0 36 36"
                      className="rotate-90 translate-x-3 hover:translate-x-0 transition-all"
                    >
                      <path d="M27.66 15.61 18 6l-9.66 9.61A1 1 0 1 0 9.75 17L17 9.81v19.13a1 1 0 1 0 2 0V9.81L26.25 17a1 1 0 0 0 1.41-1.42Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-300  "></div>
      <div className="flex relative">
        <div className="lower-section flex py-2 justify-around sm:justify-between w-full px-3 md:w-[50%]">
          <span>Opal Camera Inc.</span>
          <span>All rights reserved.</span>
        </div>
        <a href="#main">
          <button className="bg-gray-300 hover:bg-yellow-400 rounded-full w-10 h-10 md:flex absolute bottom-2 right-2 justify-center items-center hidden">
            <svg width="25" height="50" viewBox="0 0 36 36">
              <path d="M27.66 15.61 18 6l-9.66 9.61A1 1 0 1 0 9.75 17L17 9.81v19.13a1 1 0 1 0 2 0V9.81L26.25 17a1 1 0 0 0 1.41-1.42Z" />
              <path fill="none" d="M0 0h36v36H0z" />
            </svg>
          </button>
        </a>
      </div>
    </>
  );
}

export default Menu;
