import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const SiteLayout = ({ children }) => {
  const [isApple, setIsApple] = useState(false);

  const handleDownload = () => {
    if (isApple) {
      window.open(
        "https://apps.apple.com/us/app/ewave-app/id6466179046",
        "_blank"
      );
    } else {
      window.open(
        "https://play.google.com/store/apps/details?id=com.ewave.ewave",
        "_blank"
      );
    }
  };

  const changeLang = () => {
    if (localStorage.getItem("i18nextLng") === "en") {
      localStorage.setItem("i18nextLng", "ar");
      window.location.reload();
    } else {
      localStorage.setItem("i18nextLng", "en");
      window.location.reload();
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent.toLowerCase();
      setIsApple(/(ipad|iphone|ipod)/g.test(userAgent));
    }
  }, []);

  return (
    <>
      <NavBar changeLang={changeLang} handleDownload={handleDownload} />
      {children}
      <Footer />
    </>
  );
};

export default SiteLayout;
