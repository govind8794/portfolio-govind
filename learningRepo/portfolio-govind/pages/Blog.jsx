import React from "react";
import ProjectOverview from "../components/ProjectOverview";
import BlogImg from '../public/assets/logos/Blog.png'

const Blog = () => {
  return (
    <>
      <ProjectOverview
        projectImg={BlogImg}
        titleName={"Blog Templates"}
        toolNames={`React | Tailwind | Firebase`}
      />
    </>
  );
};

export default Blog;
