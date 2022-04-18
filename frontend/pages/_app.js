import "../styles/globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AuthProvider from "../components/contexts/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="bg-deep-blue">
        <div className="">
          <Nav />
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default MyApp;
