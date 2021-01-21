import React from "react";
import Header from "../Header";
import Drawer from "../Drawer";
import { LandingStyle } from "./styles";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Drawer />
      <LandingStyle>
        <main>{children}</main>
      </LandingStyle>
    </div>
  );
};

export default Layout;
