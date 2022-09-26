import React from 'react'
import ProjectOverview from "../components/ProjectOverview";
import FloridaBlue from '../public/assets/logos/FB.PNG'


const HealthCare = () => {
    return (
        <>
          <ProjectOverview
            projectImg={FloridaBlue}
            titleName={"Healthcare domain"}
            toolNames={`React | Redux | Material ui`}
          />
        </>
      );
}

export default HealthCare