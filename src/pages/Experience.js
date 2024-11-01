import React from 'react';
import '../styles/Experiences.css';

const description1 = "Developed an automated daily scraping system to collect and store the companies' financial documents in an AWS S3 database infrastructure, utilizing Docker and poetry for environment and dependency management"
const description2 = "Built a Retrieval-Augmented Generation (RAG) model at a leading fintech company using Azure OpenAI, Langchain, and Chroma DB to analyze financial reports, improving the scalability and efficiency of retrieving accurate information by 30%."

const experience = [
  { title: 'Data Science Intern', companyName: 'Nowcast', description: description1},
  { title: 'LLM Engineer Intern', companyName: 'Nowcast', description: description2},
];

const Experience = () => (
  <section id="experience" className="experience">
    <h2>Experience</h2>
    {experience.map((experience, index) => (
      <div className="experience-card" key={index}>
        <h3>{experience.title}, {experience.companyName}</h3>
        <p>{experience.description}</p>
      </div>
    ))}
  </section>
);

export default Experience;