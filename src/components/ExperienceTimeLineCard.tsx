import React from "react";
import "../component-styles/ExperienceTimeLineCard.css";

interface TimelineCardProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: string[];
}

const TimelineCard: React.FC<TimelineCardProps> = ({
  company,
  position,
  startDate,
  endDate,
  description,
  skills,
}) => {
  return (
    <div className="timeline-card-container">
      <h3 className="timeline-card-title">{company}</h3>
      <h4 className="timeline-card-position">{position}</h4>
      <p className="timeline-card-dates">
        {startDate} - {endDate}
      </p>
      <p className="timeline-card-description">{description}</p>
      <div className="timeline-card-skills">
        {skills.map((skill, index) => (
          <div key={index} className="timeline-skill-tag">
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineCard;
