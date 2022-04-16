import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
