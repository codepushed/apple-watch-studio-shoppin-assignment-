import React from "react";
import { Provider as ReduxProvider } from "react-redux";

import store from "../store/store";

import "@/styles/globals.css";
import "../styles/scss/style.scss";


const App = ({ Component, pageProps }) => {
  return (
    <ReduxProvider store={store}>
        <Component {...pageProps} />
    </ReduxProvider>
  );
};

export default App;
