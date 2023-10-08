import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";

const items = [
  {
    image: "/service1.svg",
    content: "service_one",
  },
  {
    image: "/service2.svg",
    content: "service_two",
  },
  {
    image: "/service3.svg",
    content: "service_three",
  },
  {
    image: "/service4.svg",
    content: "service_four",
  },
];

const ImageOne = styled("img")(({ theme }) => ({
  position: "absolute",
  zIndex: -1,
  top: "220%",
  left: "-10%",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const ImageTwo = styled("img")(({ theme }) => ({
  position: "absolute",
  zIndex: -1,
  top: "90%",
  right: "0",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Services = () => {
  const { t } = useTranslation();

  return (
    <>
      <ImageOne src="/left.svg" alt="" />
      <ImageTwo src="/right.svg" alt="" />

      <section id="services">
        <Container>
          <Divider
            sx={{
              mb: 3,
            }}
          >
            <Typography fontSize={35} color={"white"}>
              {t("services")}
            </Typography>
          </Divider>

          <Grid px={{ xs: 0, sm: 5 }} container spacing={3}>
            {items.map((item, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Card
                  sx={{
                    "& .MuiCardContent-root:last-child": {
                      paddingBottom: "27px",
                    },
                  }}
                >
                  <Box sx={{ padding: "16px", backgroundColor: "#353F5B" }}>
                    <CardMedia
                      sx={{
                        height: { sm: 600, xs: 320 },
                        padding: "16px",
                        objectFit: "cover",
                      }}
                      image={item.image}
                    />
                  </Box>

                  <CardContent
                    sx={{
                      backgroundImage:
                        "linear-gradient(#C2953A 100%, #C2953A00 0%)",
                      padding: "8px",
                      textAlign: "center",
                      color: "#fff",
                    }}
                  >
                    <Typography fontWeight={600} fontSize={{ md: 20, xs: 16 }}>
                      {t(item.content)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Services;
