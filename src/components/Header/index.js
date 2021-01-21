import React from "react";
import { HeaderStyles } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { HiOutlineSearch } from "react-icons/hi";
import { AiOutlineSetting, AiOutlineMenu } from "react-icons/ai";
import { PictureFrame, Flex } from "../../components/Box/styles";
import ProfilePics from "../../assets/ladyB.png";

const Header = () => {
  return (
    <HeaderStyles>
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
            <PictureFrame objFit="contain">
              <img src={ProfilePics} alt="" />
            </PictureFrame>
          </div>

          <div className="setting">
            <div className="setting-container">
              <AiOutlineSetting />
            </div>
          </div>

          <div className="menu-Icon">
            <div>
              <AiOutlineMenu />
            </div>
          </div>
        </Flex>
      </Flex>
    </HeaderStyles>
  );
};

export default Header;
