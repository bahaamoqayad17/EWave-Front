import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import DynamicModal from "../GlobalComponents/DynamicModal";
import { useEffect } from "react";

const Image = styled("img")(({ theme }) => ({
  width: "77%",
}));

const Thor = styled("img")(({ theme }) => ({
  width: "100%",
  position: "absolute",
  opacity: "0.3",
}));

const Holder = styled("header")(({ theme }) => ({
  height: "800px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    height: "850px",
  },
}));

const Header = () => {
  const { t } = useTranslation();
  const [openModal, setOpenModal] = useState(false);

  const lang =
    typeof window !== undefined
      ? globalThis?.localStorage?.getItem("i18nextLng")
      : null;

  const handleOpenModel = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Holder className="main-header">
        <DynamicModal
          setOpenModal={setOpenModal}
          open={openModal}
          model="login"
        />
        <Container sx={{ mt: { sm: 20, xs: 5 } }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box mt={{ md: 7, xs: 3 }} position={"relative"}>
                <Thor src="/thor.svg" alt="" />
                <Box position={"relative"} zIndex={1}>
                  <center>
                    <Typography
                      fontWeight={700}
                      fontSize={{ md: 70, xs: 55 }}
                      component={"span"}
                      color={"primary.yellow"}
                    >
                      Ewave
                    </Typography>
                    &nbsp;&nbsp;
                    <Typography
                      fontWeight={700}
                      fontSize={{ md: 70, xs: 55 }}
                      component={"span"}
                      color={"#fff"}
                    >
                      App
                    </Typography>
                    <Typography fontSize={{ md: 35, xs: 20 }} color={"white"}>
                      {t("header_text_one")}
                    </Typography>
                    <Typography fontSize={{ md: 35, xs: 20 }} color={"white"}>
                      {t("header_text_two")}
                    </Typography>
                    <Typography
                      fontSize={{ md: 25, xs: 20 }}
                      mt={1}
                      color={"primary.yellow"}
                    >
                      {t("Forex")}/ {t("Crypto")}/ {t("Stock Market")}
                    </Typography>
                    <Button
                      sx={{
                        backgroundColor: "#FAB623",
                        color: "#fff",
                        width: "240px",
                        fontSize: 20,
                        color: "#203971",
                        height: "66px",
                        mt: 2,
                        "&:hover": {
                          backgroundColor: "#FAB623",
                        },
                      }}
                      onClick={handleOpenModel}
                      variant="contained"
                      dir={lang === "en" ? "ltr" : "rtl"}
                    >
                      <Typography
                        fontWeight={700}
                        fontSize={25}
                        component={"span"}
                        color={"black"}
                      >
                        {t("get")}
                      </Typography>
                      &nbsp;
                      <Typography
                        fontWeight={700}
                        fontSize={25}
                        component={"span"}
                        color={"#F00"}
                      >
                        15%
                      </Typography>
                      &nbsp;
                      <Typography
                        fontWeight={700}
                        fontSize={25}
                        component={"span"}
                        color={"black"}
                      >
                        {t("discount")}
                      </Typography>
                    </Button>
                    <Box mt={2}>
                      <StarRateRoundedIcon
                        sx={{ color: "#EEB712", width: 50, height: 50 }}
                      />
                      <StarRateRoundedIcon
                        sx={{ color: "#EEB712", width: 50, height: 50 }}
                      />
                      <StarRateRoundedIcon
                        sx={{ color: "#EEB712", width: 50, height: 50 }}
                      />
                      <StarRateRoundedIcon
                        sx={{ color: "#8F8F8F", width: 50, height: 50 }}
                      />
                    </Box>
                  </center>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                display={"flex"}
                flexDirection={"row-reverse"}
                justifyContent={{ xs: "center", md: "unset" }}
              >
                <Image src="/moon.svg" alt="" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Holder>
    </>
  );
};

export default Header;
