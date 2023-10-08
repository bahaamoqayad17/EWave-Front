import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import { useState } from "react";
import DynamicModal from "../GlobalComponents/DynamicModal";
import Router from "next/router";

const Holder = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "200px",
  alignItems: "center",
  color: "#fff",
  marginBottom: "30px",
  cursor: "pointer",
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
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}));

const Image = styled("img")(({ theme }) => ({
  cursor: "pointer",
}));

const Footer = () => {
  const { t } = useTranslation();

  const [openModal, setOpenModal] = useState(false);
  const [modal, setModal] = useState("");

  const handleOpenModel = (value) => {
    setModal(value);
    setOpenModal(true);
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
  return (
    <>
      <footer>
        <DynamicModal
          setOpenModal={setOpenModal}
          open={openModal}
          model={modal}
        />
        <Container sx={{ pt: 15, pb: 3 }}>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <Box>
              <Holder onClick={() => Router.push("https://wa.me/+96598744459")}>
                <WhatsAppIcon color="secondary" fontSize="large" />
                <Typography>+96598744459</Typography>
              </Holder>
              <Holder
                onClick={() => Router.push("mailto:ewaveapponline@gmail.com")}
              >
                <img src="/mail.png" alt="" />
                <Typography>ewaveapponline@gmail.com</Typography>
              </Holder>
              <Box
                width={"100%"}
                alignItems={"center"}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <Image
                  onClick={() =>
                    Router.push(
                      "https://www.facebook.com/profile.php?id=61552235002283&mibextid=LQQJ4d"
                    )
                  }
                  src="/facebook.svg"
                  alt=""
                />
                <Image
                  onClick={() => Router.push("https://twitter.com/ewavechart")}
                  src="/twitter.svg"
                  alt=""
                />
                <Image
                  onClick={() =>
                    Router.push(
                      "https://instagram.com/ewaveapp?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
                    )
                  }
                  src="/instagram.svg"
                  alt=""
                />
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
                <Text onClick={() => handleOpenModel("privacy")}>
                  {t("privacy_policy")}
                </Text>
                &nbsp; &nbsp; &nbsp;
                <Text onClick={() => handleOpenModel("terms")}>
                  {t("terms_of_use")}
                </Text>
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
