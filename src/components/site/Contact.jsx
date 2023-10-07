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
}));

const Label = styled("p")(({ theme }) => ({
  color: "#fff",
  fontSize: "25px",
  fontWeight: 500,
}));

const Section = styled("section")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    paddingTop: 0,
  },
}));

const Contact = () => {
  const { t } = useTranslation();
  return (
    <>
      <Section>
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
                color={"primary.yellow"}
              >
                ــــــــــــ {t("contact_us")} ــــــــــــ
              </Typography>
              <Box mb={7}>
                <Label>{t("full_name")}</Label>
                <TextField fullWidth variant="standard" />
              </Box>
              <Box mb={7}>
                <Label>{t("email")}</Label>
                <TextField fullWidth variant="standard" />
              </Box>
              <Box mb={7}>
                <Label>{t("phone_number")}</Label>
                <TextField fullWidth variant="standard" />
              </Box>
              <Box mb={7}>
                <Label>{t("message")}</Label>
                <TextField fullWidth multiline rows={4} variant="outlined" />
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
                color="secondary"
                variant="contained"
              >
                {t("send")}
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
                  <Typography>+971 4 4541409</Typography>
                </Holder>
                <Holder>
                  <WhatsAppIcon color="secondary" fontSize="large" />
                  <Typography>+966252525252</Typography>
                </Holder>
                <Holder style={{ maxWidth: "345px" }}>
                  <EmailIcon color="secondary" fontSize="large" />
                  <Typography>redstraveldubai@gmail.com</Typography>
                </Holder>
                <Holder style={{ maxWidth: "440px" }}>
                  <LocationOnIcon color="secondary" fontSize="large" />
                  <Typography>Murjan 2, Plaza Level, Jumeirah beach</Typography>
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
