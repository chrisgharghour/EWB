import React from 'react'
import { ColombiaBoard } from '../Helpers/ColombiaBoard';
import ProjectItem from '../Components/ProjectItem';
import "../CSS/Colombia.css";

function Colombia() {
  return (
    <div className="colombia">
        <div className="colombiaTitleSection">
          <div className="colombiaOverlay"></div>
          <div className="colombiaTitle">Colombia</div>
          <div className="colombiaTitle2">Sanitation, Education & Development</div>
        </div>
        <h1 className="mainTitle">Project Leads</h1>
        <div className="BoardList">
          {ColombiaBoard.map((projectItem, key) => {
            return (
            <div className="Boardmember" key={key} to={`/projects/${projectItem.id}`}>
            <ProjectItem
            key={key}
            image={projectItem.image}
            name={projectItem.name}
            description={projectItem.description} 
            major={projectItem.major}
            />
            </div>
            );
          })}
        </div>
        <h1 className="sectionTitles">About the Project</h1>
        <p className="sectionParagraphs">The Colombia project consists of building 3 biofactories in the localities of Caqueta, Planadas, and Armenia which will each serve around 100 community members.</p>
        <h1 className="sectionTitles">About Colombia</h1>
        <p className="sectionParagraphs">In 2022, 5 million Colombians did not reach their cognitive potential due to chronic malnutrition during childhood. Affected communities are thus not only underfed, they are also prevented from improving their quality of life by obtaining higher-paying jobs and left vulnerable as a result of undernourishment.</p>
        <h1 className="sectionTitles">Current State of Project</h1>
        <p className="sectionParagraphs"> We have finished our designs, drafted our construction drawings, and elaborated a bill of materials. Currently, we are awaiting final confirmation of the budget and drawings by the architects with whom we are working in Colombia.</p>
    </div>
  )
}

export default Colombia
