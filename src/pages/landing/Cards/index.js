import React from "react";
import { CardStyles } from "./styles";
import { Flex, PictureFrame } from "../../../components/Box/styles";
import { IoIosPeople } from "react-icons/io";
import { MdNotificationsActive } from "react-icons/md";
import { AiTwotoneNotification } from "react-icons/ai";
import { Header4, Paragraph } from "../../../components/Fonts/styles";

const Cards = () => {
  let cards = [
    {
      name: "Notifications",
      icon: <MdNotificationsActive />,
      color: "#b78104",
      bgColor: "#f4cc6d2e",
      detail: "+2 in the last hour",
      key: 1,
    },
    {
      name: "Refer a friend",
      icon: <IoIosPeople />,
      color: "blue",
      bgColor: "#75cef04d",
      detail: "lorem  ipsum",
      key: 2,
    },
    {
      name: "Announcement",
      icon: <AiTwotoneNotification />,
      color: "#04b004",
      bgColor: "#defbde",
      detail: "lorem  ipsum",
      key: 3,
    },
  ];
  return (
    <CardStyles>
      <Flex
        className="card-container"
        justifyContent="space-between"
        alignItems="stretch"
      >
        {cards.map(({ name, icon, color, bgColor, detail, key }) => (
          <Flex
            className="card"
            width="calc(50% - 10px)"
            alignItems="stretch"
            key={key}
          >
            <Flex
              width="300px"
              bgColor="white"
              className="card-details"
              flexDir="column"
            >
              <PictureFrame
                color={color}
                height="50px"
                className="icon"
                width="50px"
                bgColor={bgColor}
              >
                {icon}
              </PictureFrame>
              <Header4 bold color="#333232">
                {name}
              </Header4>
              <Paragraph>{detail}</Paragraph>
            </Flex>
            <Flex bgColor={bgColor} width="auto" />
          </Flex>
        ))}
      </Flex>
    </CardStyles>
  );
};

export default Cards;
