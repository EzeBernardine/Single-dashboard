import React from "react";
import { PostATaskStyles } from "./styles";
import { Flex, Grid, PictureFrame } from "../../../components/Box/styles";
import { BsQuestionCircle, BsPersonFill } from "react-icons/bs";
import { RiEditCircleLine } from "react-icons/ri";
import { FiBox } from "react-icons/fi";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { Span, Small } from "../../../components/Fonts/styles";
import { icons } from "./icons";

const PostATask = () => {
  return (
    <PostATaskStyles>
      <Grid
        gap="20px"
        gridCol="1fr 300px"
        alignItems="start"
        className="main-container"
      >
        <Flex bgColor="white" className="left-container">
          <Flex className="qeustionMark" width="max-content">
            <BsQuestionCircle />
          </Flex>

          <Flex width="30%" className="postATask-text" flexDir="column">
            <PictureFrame
              className="icon-wrap task-box"
              bgColor="#df4c0614"
              color="#FF5242"
              height="40px"
              width="40px"
            >
              <FiBox />
            </PictureFrame>

            <div>
              <Span color="#333232">Post a Task</Span>
            </div>

            <Small>Lorem ipsum dolor sit amet consectetur, adip</Small>
          </Flex>

          <Grid
            className="post-icons"
            width="70%"
            gap="15px"
            gridCol="repeat(auto-fill, 70px)"
          >
            {icons.map(({ name, icon }) => (
              <Flex width="auto" flexDir="column" key={name + index}>
                <PictureFrame
                  className="icon-wrap"
                  bgColor="#df4c0614"
                  color="#FF5242"
                  height="40px"
                  width="40px"
                >
                  {icon}
                </PictureFrame>

                <Small color="#d9d7d7">{name}</Small>
              </Flex>
            ))}
          </Grid>
        </Flex>

        <Flex bgColor="white" className="right-container" flexDir="column">
          <Flex className="qeustionMark" width="max-content">
            <BsQuestionCircle />
          </Flex>

          <PictureFrame
            className="edit"
            bgColor="white"
            height="30px"
            width="30px"
            color="#acabab"
          >
            <RiEditCircleLine />
          </PictureFrame>

          <PictureFrame
            bgColor="#0000ff1a"
            color="blue"
            height="40px"
            width="40px"
            className="profile-image"
          >
            <BsPersonFill />
          </PictureFrame>

          <div className="profile-text">
            <Span color="#333232">Profile Status</Span>
          </div>

          <Grid className="profile-Status" gap="15px" gridCol="1fr 1fr">
            <ul className="profile-checked">
              <li>
                <AiOutlineCheck /> Account
              </li>
              <li>
                <AiOutlineCheck /> Profile
              </li>
            </ul>
            <ul className="profile-unchecked">
              <li>
                <AiOutlineClose /> Verification
              </li>
              <li>
                <AiOutlineClose /> Payments
              </li>
            </ul>
          </Grid>
        </Flex>
      </Grid>
    </PostATaskStyles>
  );
};

export default PostATask;
