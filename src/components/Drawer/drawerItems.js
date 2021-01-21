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
  },
  {
    logo: <img src={wallet} alt="" />,
  },
  {
    logo: <img src={stars} alt="stars" />,
  },
  {
    logo: <img src={bell} alt="" />,
  },
  {
    logo: <img src={alert} alt="alert" />,
  },
  {
    logo: <img src={accPlus} alt="account plus" />,
  },

  {
    logo: <img src={help} alt="Help" />,
  },
];
