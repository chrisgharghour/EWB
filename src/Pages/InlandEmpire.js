import React from 'react'
import { InlandEmpireBoard } from '../Helpers/InlandEmpireBoard';
import ProjectItem from '../Components/ProjectItem';
import "../CSS/InlandEmpire.css";

function InlandEmpire() {
  return (
    <div className="inlandEmpire">
        <div className="inlandEmpireTitleSection">
          <div className="inlandEmpireOverlay"></div>
          <div className="inlandEmpireTitle">Inland Empire</div>
          <div className="inlandEmpireTitle2">Agriculture Sustainability</div>
        </div>
        <h1 className="sectionTitles">Project Leads</h1>
        <div className="BoardList">
          {InlandEmpireBoard.map((projectItem, key) => {
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
        <p className="sectionParagraphs">The ADA accessible garden beds we are designing and constructing will sit on either flank of the entrance of Huerta del Valle. These garden beds will allow members of the community who have mobility issues to engage with the main goal of growing fresh produce for the community. </p>
        <p className="sectionParagraphs">Additionally, we are working on managing and redesigning the entire site plan of the community to clear any overlap between the demarcations of the various projects taking place. In doing so, we hope to foster a better environment for everyone to become more educated on gardening and to have better access to healthy, organic produce.</p>
        <p className="sectionParagraphs">In the Summer and Fall of 2024, a team of UCLA students and professional engineers traveled out to the site to assess the land and measure out where the beds will go. As of January 2025, the project is wrapping up designs and plans to start construction in the coming weeks.</p>
        <h1 className="sectionTitles">About Huerta del Valle</h1>
        <p className="sectionParagraphs">Huerta del Valle is a nonprofit grassroots organization that operates a network of urban farms and community gardens. Their mission is to foster an equitable food system by providing healthy, organic food to all members of the community.  In line with this goal, Huerta del Valle provides to community members in need by donating the produce they grow, and also source additional produce from other cities to give back to members in their community.</p>
        <p className="sectionParagraphs">Additionally, Huerta del Valle empowers community members to grow their own food. They offer approximately 30 garden beds which people can rent out. All funds acquired from this are given back to the community to help food production and community programs. This initiative helps the members become more self-reliant but also more knowledgeable about growing food that can thrive in the local environment. Plot holders are supported by the Head of Agriculture, who works closely with participants to maximize growth.</p>
        <p className="sectionParagraphs">The community also holds workshops to educate members on various health-related topics, related to food or broader wellness. These workshops create a safe space to foster a supportive environment in which individuals are more encouraged to take actionable steps towards healthier, more fulfilling lives.</p>
        <h1 className="sectionTitles">Future Plans</h1>
        <p className="sectionParagraphs">Starting Spring Quarter, we plan on sourcing all the required supplies to begin construction. We will be cutting all the wood and creating an assembly process in the UCLA Engineering Makerspace. Once all preparation is complete, we will go to the site to construct all the beds.</p>
    </div>
  )
}

export default InlandEmpire
