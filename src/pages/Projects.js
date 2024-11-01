import React from 'react';
import CollapsibleBox from '../components/Collapsible';

const vac_app_description = `•	Leveraged teamwork skills to lead the team, ensuring timely project delivery and proper version control using Git and GitHub, while facilitating collaboration and maintaining project alignment.\n
•	Developed and implemented an innovative group travel planning app using UI design knowledge, Android Studio, Kotlin, Firebase, and Google Maps Platform APIs, enabling users to create groups, invite members, collaboratively build itineraries with customizable events, and share trip photos in a dedicated album.`
const battleship_description = `•	Accomplished full stack development of a real-time multiplayer game using web technologies, implementing the Model-View-Controller (MVC) and enhancing user experience and the simultaneous play with WebSocket and a database management with MongoDB NoSQL.`
const eye_research_description = `•	Detected the optic disk using circle detection with OpenCV in research focusing on building a classic machine learning (ML) model to improve automated vessel segmentation systems`
const ga_description = `Details coming soon`
const satellite_classification_description = `Details coming soon`

const projects = [
  { title: 'Vacation Management Android App', description: vac_app_description },
  { title: 'Automatic Eye Vessels Segmentation Research', description: eye_research_description },
  { title: 'Battleship Web Application', description: battleship_description },
  { title: 'Shortest Path Finder with Genetic Algorithm (GA)', description: ga_description },
  { title: 'Satelite Image Classification', description: satellite_classification_description },
];

const Projects = () => (
  <section id="projects" className="projects">
    <h2>Projects</h2>
    {projects.map((project, index) => (
      <div className="project-card" key={index}>
        <CollapsibleBox
        title={project.title}
        content={project.description}
        />
      </div>
    ))}
  </section>
);

export default Projects;
