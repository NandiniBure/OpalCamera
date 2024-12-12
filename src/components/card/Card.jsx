import React from "react";

function Card() {
  const data = [
    {
      name: "Tadpole",
      image: "/opalc1.png",
      description: "The tiny webcam with a clip",
      rate: "Now $149",
    },
    {
      name: "Opal C1",
      image: "/opalc2.png",
      description: "This first professional webcam",
      rate: "$299",
    },
    {
      name: "Composer",
      image: "/opalc3.png",
      description: "This magic behind the camera",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        {data.map((curr, index) => (
          <div
            key={index}
            className="border-[1px] bg-white p-4 flex leading-tight flex-col items-center gap-2"
          >
            <h2 className="text-[2rem] font-bold font-sans pt-12">
              {curr.name}
            </h2>
            <h3 className="text-neutral-400 font-sans">{curr.description}</h3>
            {curr.rate && (
              <button className="font-sans bg-yellow-400 mt-5 h-8 w-28 rounded-3xl">
                {curr.rate}
              </button>
            )}
            {/* Dynamic Image Size */}
            <div className="mt-10">
              <img
                src={curr.image}
                alt={curr.name}
                width={200} // Default width for larger screens
                height={200}
                className="w-[150px] md:w-[200px] h-auto"
                priority
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
