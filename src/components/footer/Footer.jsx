import React from "react";
function Footer({data}) {

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

  return (
    <div className="footer bg-white px-0 lg:px-20">
      <div className="footer-menu w-full px-2 bg-white flex justify-between">
        <div className="left-section h-60 md:w-1/2 w-full sm:flex hidden flex-col justify-between basis-[30%]">
          <div className="upper-section flex flex-col md:gap-4 gap-1 w-full">
            <h3 className="text-[20px] font-semibold">
              Subscribe to the
              <br />
              Opal Newsletter
            </h3>
            <p className="text-[13px]  text-neutral-400">
              Latest news, musings, announcements <br /> and updates direct to
              your inbox.
            </p>
            <button
              className={`w-28 h-12 bg-[#080404] hover:bg-yellow-400 rounded-3xl justify-center items-center flex  `}
            >
              <svg
                width="40"
                height="80"
                fill="#fff"
                viewBox="0 0 36 36"
                className=" rotate-90 translate-x-3 hover:translate-x-0 transition-all"
              >
                <path d="M27.66 15.61 18 6l-9.66 9.61A1 1 0 1 0 9.75 17L17 9.81v19.13a1 1 0 1 0 2 0V9.81L26.25 17a1 1 0 0 0 1.41-1.42Z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="right-section  md:w-1/2 w-full basis-[100%] sm:basis-[60%] md:basis-1/2 py-6 md:p-0">
          <div className="text-xs font-sans  font-semibold flex  justify-around leading-6">
            {Footerdata?.map((curr, index) => {
              return (
                <ul key={index}>
                  <li className="mb-3 text-neutral-400">{curr.title}</li>
                  {curr.content.map((newElement, index) => {
                    return (
                      <a key={index} href="#">
                        <li className="hover:text-neutral-400">{newElement}</li>
                      </a>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
  

      <div className="flex relative">
        <div className="lower-section align-bottom flex justify-around md:justify-between w-full md:w-[50%] px-2 md:px-4 md:py-2 py-4">
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
    </div>
  );
}

export default Footer;


