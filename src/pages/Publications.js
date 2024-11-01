import React from 'react';
import CollapsibleBox from '../components/Collapsible';

const publications = [
  { title: 'Unsupervised Learning Model for Network Anomaly Detection Using an Imbalanced Dataset, July 23-26, 2024. **Best Paper Awarded**', description: '•	Targeted at the Scopus-indexed journal manuscript. The expected publication date is early 2025.' },
  { title: 'A Study on the Effectiveness of a Neural Network Model for Detecting Network Anomalies Using an Imbalanced Dataset," Journal Manuscript (In Progress)', description: '•	Developed the unsupervised neural network model using an imbalanced dataset for network anomaly detection by utilizing various python libraries.' },
];

const Publications = () => (
  <section id="publications" className="publications">
    <h2>Publications</h2>
    {publications.map((publication, index) => (
      <div className="publication-card" key={index}>
        <CollapsibleBox
        title={publication.title}
        content={publication.description}
        />
      </div>
    ))}
  </section>
);

export default Publications;