import React from "react";

import AppBar from "../Components/AppBar";
import WatchStudioHero from "../Components/WatchStudioHero";
import Tabs from "../Components/Tabs";

const Landing = () => {
  return (
    <div>
      <AppBar />
      <WatchStudioHero />
      <Tabs />
    </div>
  );
};

export default Landing;