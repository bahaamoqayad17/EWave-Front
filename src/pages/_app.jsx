import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import "../lang/i18";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "../store";
import { Provider } from "react-redux";
import "../styles/global.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function App({ Component }) {
  const { i18n } = useTranslation();

  const getLayout = Component.getLayout ?? ((page) => page);

  const lang = globalThis.localStorage?.getItem("i18nextLng");

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <Provider store={store}>
      <Head>
        <title>{`${process.env.APP_NAME}`}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <CssBaseline />
        {getLayout(<Component />)}
      </ThemeProvider>
    </Provider>
  );
}
