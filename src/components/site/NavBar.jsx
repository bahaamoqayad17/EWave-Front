import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Router, { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import GTranslateIcon from "@mui/icons-material/GTranslate";

const drawerWidth = 240;
const navItems = [
  { title: "home", link: "/" },
  { title: "services", link: "/" },
  { title: "contact_us", link: "/" },
];

const Image = styled("img")(({ theme }) => ({
  width: "77%",
  [theme.breakpoints.down("sm")]: {
    width: "50%",
  },
}));

function NavBar(props) {
  const { window } = props;
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isApple, setIsApple] = useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleDownload = () => {
    if (isApple) {
      Router.push("https://apps.apple.com/us/app/ewave-app/id6466179046");
    } else {
      Router.push(
        "https://play.google.com/store/apps/details?id=com.ewave.ewave"
      );
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent.toLowerCase();
      setIsApple(/(ipad|iphone|ipod)/g.test(userAgent));
    }
  }, []);

  const drawer = (
    <>
      <Box onClick={handleDrawerToggle} sx={{ p: 2 }}>
        <Image
          onClick={() => Router.push("/")}
          style={{ cursor: "pointer" }}
          src="/logo.svg"
          alt="test"
        />

        <List>
          {navItems.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                onClick={() => {
                  router.push(`/${item.link}`);
                }}
                sx={{ px: 0 }}
              >
                <ListItemText primary={t(item.title)} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box display={"flex"} justifyContent={"space-between"}>
          <Button
            onClick={handleDownload}
            sx={{ backgroundColor: "#FAB623", color: "#fff" }}
            variant="contained"
          >
            {t("download_free")}
          </Button>
          <GTranslateIcon
            sx={{ cursor: "pointer" }}
            color="secondary"
            fontSize="large"
            onClick={props.changeLang}
          />
        </Box>
      </Box>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", height: { sm: "95px", xs: "75px" } }}>
      <CssBaseline />
      <AppBar
        sx={{
          backgroundColor: "#2F3254",
          height: { sm: "95px", xs: "75px" },
          pt: 1,
        }}
        elevation={0}
        component="nav"
      >
        <Toolbar>
          <IconButton
            sx={{
              display: { sm: "flex", xs: "flex", md: "none" },
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Image
              onClick={() => Router.push("/")}
              style={{ cursor: "pointer", width: "13%" }}
              src="/logo.svg"
              alt="test"
            />
            <MenuIcon
              fontSize="large"
              color="black"
              onClick={handleDrawerToggle}
            />
          </IconButton>

          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box>
                <Typography
                  component="div"
                  sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
                >
                  <Image src="./logo.svg" alt="logo" />
                </Typography>
              </Box>
              <Box
                sx={{
                  display: { xs: "none", sm: "none", md: "flex" },
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "50%",
                }}
              >
                {navItems.map((item, i) => (
                  <>
                    <Link
                      key={item.title}
                      className="nav-link"
                      href={`${item.link}`}
                      style={{
                        color: "#fff",
                      }}
                    >
                      {t(item.title)}
                    </Link>
                  </>
                ))}

                <Button
                  sx={{
                    backgroundColor: "#FAB623",
                    color: "#fff",
                    width: "240px",
                    fontSize: 20,
                    color: "#203971",
                    height: "66px",
                    "&:hover": {
                      backgroundColor: "#FAB623",
                    },
                  }}
                  onClick={handleDownload}
                  variant="contained"
                >
                  {t("download_free")}
                </Button>
                <GTranslateIcon
                  sx={{ cursor: "pointer" }}
                  color="secondary"
                  fontSize="large"
                  onClick={props.changeLang}
                />
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}

export default NavBar;
