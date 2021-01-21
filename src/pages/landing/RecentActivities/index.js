import React from "react";
import { ActivityStyles } from "./styles";
import { Flex, PictureFrame } from "../../../components/Box/styles";
import { IoMdPerson } from "react-icons/io";
import { BiTimer } from "react-icons/bi";
import {
  Span,
  Header4,
  Header6,
  Paragraph,
} from "../../../components/Fonts/styles";

const RecentActivities = () => {
  let activites = [
    {
      name: "Name",
      icon: <IoMdPerson />,
      time: "4 min ago",
      ticker: 2,
      offer: 1,
      online: true,
      key: 1,
    },
    {
      name: "Name",
      icon: <IoMdPerson />,
      time: "4 min ago",
      ticker: 2,
      offer: 1,
      online: true,
      key: 2,
    },
    {
      name: "Name",
      icon: <IoMdPerson />,
      time: "4 min ago",
      ticker: 2,
      offer: 1,
      online: true,
      key: 3,
    },
    {
      name: "Name",
      icon: <IoMdPerson />,
      time: "4 min ago",
      ticker: 2,
      offer: 1,
      online: true,
      key: 4,
    },
    {
      name: "Name",
      icon: <IoMdPerson />,
      time: "4 min ago",
      ticker: 2,
      offer: 1,
      online: true,
      key: 5,
    },
    {
      name: "Name",
      icon: <IoMdPerson />,
      time: "4 min ago",
      ticker: 2,
      offer: 1,
      online: true,
      key: 6,
    },
  ];
  return (
    <ActivityStyles>
      <Flex
        className="card-container"
        justifyContent="space-between"
        alignItems="stretch"
        flexWrap="nowrap"
      >
        {/* <Flex className="card" alignItems="stretch" flexWrap="nowrap" min> */}
        <Flex
          width="300px"
          bgColor="white"
          className="card-details"
          flexDir="column"
          min
        >
          <PictureFrame
            color={"blue"}
            height="50px"
            className="icon"
            width="50px"
            bgColor={"#0000ff1a"}
          >
            <BiTimer />
          </PictureFrame>
          <Header4 bold color="#333232">
            Recent Activities
          </Header4>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laboriosam, !
          </Paragraph>
        </Flex>

        <Flex
          className="activities-log"
          flexWrap="nowrap"
          justifyContent="flex-start"
          alignItems="stretch"
          width="auto"
        >
          {activites.map(({ name, ticker, offer, time, icon, online, key }) => (
            <Flex
              className="activity-container"
              width="300px"
              min
              bgColor="white"
              key={key}
            >
              <Flex justifyContent="space-between">
                <Flex width="max-content">
                  <PictureFrame className="PictureFrame">{icon}</PictureFrame>
                  <Header6>{name}</Header6>
                </Flex>
                <Span className="time">{time}</Span>
              </Flex>

              <Flex
                className="empty"
                height="calc(100% - 100px)"
                bgColor="#75cef04d"
              />

              <Flex justifyContent="space-between">
                <div>
                  <Span>{offer} Offer</Span>
                  <Span>{ticker} ticker</Span>
                </div>
                {online ? <Span className="time">online</Span> : null}
              </Flex>
            </Flex>
          ))}
        </Flex>
        {/* </Flex> */}
      </Flex>
    </ActivityStyles>
  );
};

export default RecentActivities;
