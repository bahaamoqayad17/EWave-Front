import { useState } from "react";
import { useTranslation } from "react-i18next";

const style = {
  marginBottom: "20px",
};

const Terms = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <h1 style={style}>{t("terms_of_use")}</h1>

      <p>{t("terms_of_use_content")}</p>
      <p>{t("one")}</p>
      <p>{t("two")}</p>
      <p>{t("three")}</p>
      <p>{t("four")}</p>
      <p>{t("five")}</p>
      {/* <p>{t("six")}</p> */}
    </>
  );
};

export default Terms;
