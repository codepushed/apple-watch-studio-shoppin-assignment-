import React from "react";

import "@/styles/globals.css";
import "../styles/scss/style.scss";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
