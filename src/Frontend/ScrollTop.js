import { useState, useEffect } from "react";
import "./Style/ScrollTop.css";

const ScrollTop = ({ children }) => {
  const [top, setTop] = useState(false);

  useEffect(() => {
    const scrollTop = () => {
      if (window.scrollY > 300) {
        setTop(true);
      } else {
        setTop(false);
      }
    };

    scrollTop();

    window.addEventListener("scroll", scrollTop);
    return () => window.removeEventListener("scroll", scrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {children}

      {top && (
        <button
          onClick={scrollToTop}
          className={`scroll-top ${top ? "show" : ""}`}
          aria-label="Scroll to top"
        >
          ⬆ Back to Top
        </button>
      )}
    </>
  );
};

export default ScrollTop;
