import React from "react";
import accPlus from "../../assets/account-plus.svg";
import bell from "../../assets/bell-ring.svg";
import alert from "../../assets/clipboard-alert.svg";
import help from "../../assets/help-circle.svg";
import stars from "../../assets/stars.svg";
import dashboard from "../../assets/view-dashboard.svg";
import wallet from "../../assets/wallet.svg";

export const drawerItems = [
  {
    logo: <img src={dashboard} alt="dashboard" />,
    key: 1,
  },
  {
    logo: <img src={wallet} alt="" />,
    key: 2,
  },
  {
    logo: <img src={stars} alt="stars" />,
    key: 3,
  },
  {
    logo: <img src={bell} alt="" />,
    key: 4,
  },
  {
    logo: <img src={alert} alt="alert" />,
    key: 5,
  },
  {
    logo: <img src={accPlus} alt="account plus" />,
    key: 6,
  },

  {
    logo: <img src={help} alt="Help" />,
    key: 7,
  },
];
