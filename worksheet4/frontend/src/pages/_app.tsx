import "../styles/globals.scss";
import type { AppProps } from "next/app";
// import { SessionProvider } from "next-auth/react";
// import PopulatedNavBar from "../components/PopulatedNavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <SessionProvider session={pageProps.session}>
    //   <PopulatedNavBar />
    //   <Component {...pageProps} />
    // </SessionProvider>
    <Component {...pageProps} />
  );
}

export default MyApp;
