import { appWithTranslation } from "next-i18next";
import { useHMR } from "../hooks/useHMR";
import nextI18nextConfig from "../next-i18next.config";

const MyApp = ({ Component, pageProps }) => {
  useHMR();
  return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp, nextI18nextConfig);
