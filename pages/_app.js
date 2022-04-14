import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { UserContextProvider } from "../context/userContext";

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
