import { useEffect, useRef, useState } from "react";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Menu from "./components/Menu/menu";

export default function Home() {
  const [isComponentVisible, setComponentVisible] = useState(false);

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

  const headerData = [
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
  ];

  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <main>
      {isComponentVisible ? (
        <Menu isComponentVisible={isComponentVisible}
        setComponentVisible={setComponentVisible} />
      ) : (
        <>
          <Header
            setComponentVisible={setComponentVisible}
            isComponentVisible={isComponentVisible}
            data={headerData}
          />
          <Card />
          <div ref={imageRef}>
            <img
              src="/logo-black.png"
              alt="logo"
              width={500}
              height={500}
              priority
              className={`mt-10 w-full h-full md:mb-[-4rem] mb-0 animate-image ${
                isVisible ? "visible" : ""
              }`}
            />
          </div>
          <Footer data={Footerdata} />
        </>
      )}
    </main>
  );
}
