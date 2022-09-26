import React from 'react'
import ProjectOverview from "../components/ProjectOverview";
import DSGImg from '../public/assets/logos/DSG.PNG'


const ECommerce = () => {
    return (
        <>
          <ProjectOverview
            projectImg={DSGImg}
            titleName={"E-Commerce"}
            toolNames={`React | Redux | SCSS`}
          />
        </>
      );
}

export default ECommerce