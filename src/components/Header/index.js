import React, { useState } from "react";
import { HeaderStyles } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineSetting, AiOutlineMenu } from "react-icons/ai";
import { PictureFrame, Flex } from "../../components/Box/styles";
import ProfilePics from "../../assets/ladyB.png";

const Header = () => {
  const [menu, setMenu] = useState(undefined);
  const handleOpenMenu = () => setMenu(!menu);
  return (
    <HeaderStyles menu={menu}>
      <Flex
        justifyContent="space-between"
        className="header-container"
        flexWrap="nowrap"
      >
        <Flex className="header-left" width="max-content" flexWrap="nowrap">
          <Flex className="search-container" width="150px" flexWrap="nowrap">
            <Flex className="search-icon" width="20%">
              <HiOutlineSearch />
            </Flex>
            <Flex width="80%">
              <Input placeholder="Search" />
            </Flex>
          </Flex>

          <div className="btn-container">
            <Button text="Post a Task" />
          </div>

          <nav className="list-item-container">
            <ul>
              <li className="list-itme">Browse tasks</li>
              <li className="list-itme">My Tasks</li>
              <li className="list-itme">Profile</li>
            </ul>
          </nav>
        </Flex>

        <Flex width="max-content" className="header-right" flexWrap="nowrap">
          <nav className="list-item-container">
            <ul>
              <li className="list-itme">Help</li>
              <li className="list-itme">Notifications</li>
              <li className="list-itme">Messages</li>
            </ul>
          </nav>

          <div className="profile-image-container">
            <PictureFrame
              objFit="contain"
              width="30px"
              height="30px"
              bgColor="#f1f1f7"
            >
              <img src={ProfilePics} alt="" />
            </PictureFrame>
          </div>

          <div className="setting">
            <div className="setting-container">
              <AiOutlineSetting />
            </div>
          </div>

          <div className="menu-Icon" onClick={() => handleOpenMenu()}>
            <div>
              <AiOutlineMenu />
            </div>
            <Flex className="dropdown-menu">
              <ul>
                <li className="list-itme">Browse tasks</li>
                <li className="list-itme">My Tasks</li>
                <li className="list-itme">Profile</li>
                <li className="list-itme">Help</li>
                <li className="list-itme">Notifications</li>
                <li className="list-itme">Messages</li>
              </ul>
            </Flex>
          </div>
        </Flex>
      </Flex>
    </HeaderStyles>
  );
};

export default Header;
