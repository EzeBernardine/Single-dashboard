import React from "react";
import Layout from "../../components/Layout";
import PostATask from "./PostATask";
import TaskSummary from "./TaskSummary";
import Cards from "./Cards";
import RecentActivities from "./RecentActivities";

const Landing = () => {
  return (
    <div>
      <Layout>
        <PostATask />
        <TaskSummary />
        <Cards />
        <RecentActivities />
      </Layout>
    </div>
  );
};

export default Landing;
