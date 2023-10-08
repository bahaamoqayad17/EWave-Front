import { useState } from "react";
import { useTranslation } from "react-i18next";

const style = {
  marginBottom: "20px",
};

const Privacy = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <h1 style={style}>{t("privacy_policy")}</h1>

      <p>{t("privacy_policy_content")}</p>
    </>
  );
};

export default Privacy;
