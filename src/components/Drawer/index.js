import React, { useState } from "react";
import { DrawerStyles } from "./styles";
import { drawerItems } from "./drawerItems";
import { Flex, PictureFrame } from "../Box/styles";
import MenuIcon from "./MenuIcon";

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const handleOpenDrawer = () => setDrawer(!drawer);

  return (
    <DrawerStyles drawer={drawer}>
      <Flex className="menu-Icon" height="60px" width="50px">
        <div>
          <MenuIcon
            click={handleOpenDrawer}
            showMenuDropdown={drawer}
            color="#818E94"
          />
        </div>
      </Flex>

      <div className="drawer-items">
        <div className="overflow" onClick={() => handleOpenDrawer()} />
        <ul>
          {drawerItems.map(({ logo, key }) => (
            <li key={key}>
              <Flex width="100%" height="50px">
                <PictureFrame
                  objFit="contain"
                  id="d"
                  width="20px"
                  height="20px"
                  className="drawer-icon icon-image"
                >
                  {logo}
                </PictureFrame>
              </Flex>
            </li>
          ))}
        </ul>
      </div>
    </DrawerStyles>
  );
};

export default Header;
