import React from "react";
import TimelineCard from "./ExperienceTimeLineCard";
import "../component-styles/TimeLine.css";

interface TimelineProps {
  experiences: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
    skills: string[];
  }[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <div className="timeline">
      {experiences.map((experience, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-connector" />
          <TimelineCard {...experience} />
        </div>
      ))}
    </div>
  );
};

export default Timeline;
