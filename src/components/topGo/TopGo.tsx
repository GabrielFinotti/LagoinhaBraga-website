import { useEffect, useState } from "react";
import arrow from "../../assets/icons/arrowUp-icon.svg";
import "./TopGo.scss";

export const TopGo = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const totalHeight = window.screen.availHeight;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topGo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (scrollPosition > totalHeight) {
    return (
      <div id="TopGo" onClick={topGo}>
        <img src={arrow} alt="Top" />
      </div>
    );
  } else {
    return null;
  }
};
