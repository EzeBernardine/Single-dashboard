import React from "react";
import { TaskSummaryStyles } from "./styles";
import { Flex, Grid } from "../../../components/Box/styles";
import { BsQuestionCircle } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { CustomeChart } from "./chart";
import { Header1, Span, Bold, Small } from "../../../components/Fonts/styles";

let summaryData = [
  {
    name: "Draft",
    value: null,
    key: 1,
  },
  {
    name: "Open for offer",
    value: null,
    key: 2,
  },
  {
    name: "Assigned",
    value: 1,
    key: 3,
  },
  {
    name: "Awaiting payment",
    value: 1,
    key: 4,
  },
  {
    name: "Reviews",
    value: null,
    key: 5,
  },
  {
    name: "Completed",
    value: 1,
    key: 6,
  },
];
const TaskSummary = () => {
  return (
    <TaskSummaryStyles>
      <Header1 color="#333232" bold>
        My Task Summary
      </Header1>

      <Grid
        className="summary-main"
        gap="20px"
        gridCol="1fr 1fr"
        alignItems="flex-start"
      >
        <Flex className="summary-left" bgColor="white" flexWrap="nowrap">
          <Flex className="qeustionMark" width="max-content">
            <BsQuestionCircle />
          </Flex>
          <Flex className="viewMore" width="max-content">
            <FiMoreHorizontal />
          </Flex>

          <div className="summary-list">
            <ul>
              {summaryData.map(({ name, value, key }) => (
                <li key={key}>
                  <Flex justifyContent="space-between">
                    <Span>{name}</Span>
                    {value ? <Span>+ {value}</Span> : null}
                  </Flex>
                </li>
              ))}
            </ul>
          </div>

          <Flex className="total-amount" width="55%" flexDir="column">
            <Bold color="#333232">34</Bold>
            <Small>Total amount</Small>
            <Span color="#04b004">+2 in the last 30 days</Span>
          </Flex>
        </Flex>

        <Flex className="summary-right" bgColor="white">
          <CustomeChart />
        </Flex>
      </Grid>
    </TaskSummaryStyles>
  );
};

export default TaskSummary;
