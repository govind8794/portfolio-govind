import React from 'react'
import ProjectOverview from "../components/ProjectOverview";
import ATTImg from '../public/assets/logos/AT&T.PNG'


const TeleCom = () => {
    return (
        <>
          <ProjectOverview
            projectImg={ATTImg}
            titleName={"Wireless Internet"}
            toolNames={`React | StoryBook | Bit`}
          />
        </>
      );
}

export default TeleCom