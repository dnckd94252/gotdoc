import "../public/static/fonts/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/layout/Header";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "../components/layout/Footer";
import { Provider } from "react-redux";
import { wrapper, store } from "../src/store";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>GotDoc</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ade35aeff5d2d8c22b59204a00932419&libraries=services,clusterer&autoload=false"
        strategy="beforeInteractive"
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
