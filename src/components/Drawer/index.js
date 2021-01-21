import React from "react";
import { DrawerStyles } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import { drawerItems } from "./drawerItems";
import { Flex, PictureFrame } from "../Box/styles";

const Header = () => {
  return (
    <DrawerStyles>
      <Flex className="menu-Icon" height="60px">
        <div>
          <AiOutlineMenu />
        </div>
      </Flex>

      <div className="drawer-items">
        <ul>
          {drawerItems.map(({ logo }) => (
            <li>
              <Flex width="50px" height="50px">
                <PictureFrame
                  objFit="contain"
                  id="d"
                  width="20px"
                  height="20px"
                  className='drawer-icon icon-image'
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
