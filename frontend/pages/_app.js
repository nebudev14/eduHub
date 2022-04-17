import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className=" bg-deep-blue">
      <div className="">
        <Nav />
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
