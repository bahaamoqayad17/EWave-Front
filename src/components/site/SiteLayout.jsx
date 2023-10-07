import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const SiteLayout = ({ children }) => {
  const changeLang = () => {
    if (localStorage.getItem("i18nextLng") === "en") {
      localStorage.setItem("i18nextLng", "ar");
      window.location.reload();
    } else {
      localStorage.setItem("i18nextLng", "en");
      window.location.reload();
    }
  };

  return (
    <>
      <NavBar changeLang={changeLang} />
      {children}
      <Footer />
    </>
  );
};

export default SiteLayout;
