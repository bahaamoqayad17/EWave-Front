import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addMessage } from "@/store/MessageSlice";
import Router from "next/router";
import CircularProgress from "@mui/material/CircularProgress";

const Card = styled("div")(({ theme }) => ({
  background:
    "linear-gradient(180deg, rgba(217, 217, 217, 0.45) 0%, rgba(217, 217, 217, 0.00) 100%)",
  boxShadow: "0px 10px 20px 0px rgba(0, 0, 0, 0.30)",
  padding: "40px 70px",
  border: "1px dashed #FAB623",
  borderRadius: "50px",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding: "40px 20px",
  },
}));

const Holder = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "210px",
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
  cursor: "pointer",
}));

const Label = styled("p")(({ theme }) => ({
  color: "#fff",
  fontSize: "25px",
  fontWeight: 500,
  marginBottom: "10px",
}));

const Section = styled("section")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingTop: 0,
  },
}));

const Contact = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.messages);

  const [item, setItem] = useState({});

  const handleChange = (e) => {
    const { value, name } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(addMessage(item));
  };

  return (
    <>
      <Section id="contact" className="">
        <Container>
          <Divider
            sx={{
              mb: 3,
            }}
          >
            <Typography fontSize={35} color={"white"}>
              {t("contact_us")}
            </Typography>
          </Divider>
          <Card>
            <Box>
              <Typography
                mb={2}
                fontSize={{ sm: 35, xs: 25 }}
                display={{ xs: "none", md: "block" }}
                color={"primary.yellow"}
              >
                ــــــــــــ {t("contact_us")} ــــــــــــ
              </Typography>
              <Box mb={7}>
                <Label>{t("full_name")}</Label>
                <TextField
                  onChange={handleChange}
                  name="name"
                  value={item?.name}
                  sx={{
                    "& input": {
                      color: "#fff",
                    },
                  }}
                  fullWidth
                  variant="standard"
                />
              </Box>
              <Box mb={7}>
                <Label>{t("email")}</Label>
                <TextField
                  onChange={handleChange}
                  name="email"
                  type="email"
                  value={item?.email}
                  sx={{
                    "& input": {
                      color: "#fff",
                    },
                  }}
                  fullWidth
                  variant="standard"
                />
              </Box>
              <Box mb={7}>
                <Label>{t("phone_number")}</Label>
                <TextField
                  onChange={handleChange}
                  name="mobile_number"
                  value={item?.mobile_number}
                  sx={{
                    "& input": {
                      color: "#fff",
                    },
                  }}
                  fullWidth
                  variant="standard"
                />
              </Box>
              <Box mb={7}>
                <Label>{t("message")}</Label>
                <TextField
                  onChange={handleChange}
                  sx={{
                    "& textarea": {
                      color: "#fff",
                    },
                  }}
                  name="message"
                  value={item?.message}
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Box>

              <Button
                sx={{
                  "&:hover": {
                    backgroundColor: "#FAB623",
                  },
                  maxWidth: "400px",
                  height: "70px",
                  borderRadius: "20px",
                  fontSize: "30px",
                  mb: 3,
                }}
                fullWidth
                onClick={handleSubmit}
                color="secondary"
                variant="contained"
              >
                {loading ? <CircularProgress /> : t("send")}
              </Button>
            </Box>
            <Box>
              <Typography
                mb={2}
                fontSize={{ sm: 35, xs: 20 }}
                color={"primary.yellow"}
              >
                ــــــــــــ {t("contact_info")} ــــــــــــ
              </Typography>

              <Box mt={{ xs: 5, sm: 15 }}>
                <Holder>
                  <CallIcon color="secondary" fontSize="large" />
                  <Typography>+96598744459</Typography>
                </Holder>
                <Holder
                  onClick={() =>
                    window.open("https://wa.me/+96598744459", "_blank")
                  }
                >
                  <WhatsAppIcon color="secondary" fontSize="large" />
                  <Typography>+96598744459</Typography>
                </Holder>
                <Holder
                  onClick={() => Router.push("mailto:ewaveapponline@gmail.com")}
                  style={{ maxWidth: "365px" }}
                >
                  <EmailIcon color="secondary" fontSize="large" />
                  <Typography>ewaveapponline@gmail.com</Typography>
                </Holder>
                <Holder style={{ maxWidth: "470px" }}>
                  <LocationOnIcon color="secondary" fontSize="large" />
                  <Typography>
                    Mirqab,Al Tijaria Tower,Floor 11, Office 40
                  </Typography>
                </Holder>
              </Box>
            </Box>
          </Card>
        </Container>
      </Section>
    </>
  );
};

export default Contact;
