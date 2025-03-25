
import React, { useEffect } from "react";

function FadeIn({ children }) {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");
      const triggerBottom = window.innerHeight * 0.9;

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
          element.classList.add("show");
        } else {
          element.classList.remove("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div className="fade-in">{children}</div>;
}

export default FadeIn;
