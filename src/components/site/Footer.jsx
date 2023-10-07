import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GTranslateIcon from "@mui/icons-material/GTranslate";

const Holder = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "200px",
  alignItems: "center",
  color: "#fff",
  marginBottom: "30px",
  "& p": {
    fontSize: "20px",
  },
  "& svg": {
    width: "50px",
    height: "50px",
  },
}));

const Text = styled("p")(({ theme }) => ({
  color: "#fff",
  fontSize: "32px",
  fontWeight: 700,
  textDecoration: "underline",
  textDecorationColor: "#fab623",
  textDecorationThickness: "1px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}));

const Footer = () => {
  const { t } = useTranslation();

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
      <footer>
        <Container sx={{ pt: 15, pb: 3 }}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <Box>
              <Holder>
                <WhatsAppIcon color="secondary" fontSize="large" />
                <Typography>+966252525252</Typography>
              </Holder>
              <Holder>
                <img src="/mail.png" alt="" />
                <Typography>example@gmail.com</Typography>
              </Holder>
              <Box
                width={"100%"}
                alignItems={"center"}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <img src="/facebook.svg" alt="" />
                <img src="/twitter.svg" alt="" />
                <img src="/instagram.svg" alt="" />
                <GTranslateIcon
                  sx={{ cursor: "pointer" }}
                  color="secondary"
                  fontSize="large"
                  onClick={changeLang}
                />
              </Box>
            </Box>
            <Box mt={3} display={"flex"} flexDirection={"column-reverse"}>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                width={"100%"}
              >
                <Text>{t("privacy_policy")}</Text>
                &nbsp; &nbsp; &nbsp;
                <Text>{t("terms_of_use")}</Text>
              </Box>
            </Box>
          </Box>
        </Container>

        <Box borderTop={"1px solid #fab623"} p={2}>
          <Typography fontSize={24} color={"white"} textAlign={"center"}>
            {t("copy_right")}
          </Typography>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
