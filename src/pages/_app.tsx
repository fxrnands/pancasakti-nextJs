import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar, Footer } from "./components/base";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
