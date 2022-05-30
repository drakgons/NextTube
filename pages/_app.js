import "../styles/globals.css";
import "../styles/nprogress.css";
import { ThemeProvider } from "next-themes";
import { UserContextProvider } from "../context/userContext";
import Router from "next/router";
import nprogress from "nprogress";
Router.events.on("routeChangeStart", nprogress.start);
Router.events.on("routeChangeError", nprogress.done);
Router.events.on("routeChangeComplete", nprogress.done);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
