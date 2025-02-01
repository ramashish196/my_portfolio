import React from "react";
import { experiences } from "@/utils/experiences";

const TimelineItem = ({ date, title, description, skills }) => {
  return (
    <div className="relative flex pb-4">
      <div className="relative w-10 flex flex-col items-center justify-center">
        <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
        <div className="absolute top-0 w-4 h-4 bg-blue-500 rounded-full shadow"></div>
      </div>
      <div className="flex-grow pl-8">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <span className="block text-gray-500">{date}</span>
          <h3 className="text-lg font-bold">{title}</h3>
          <ul className="list-disc list-inside mt-2">
            {description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
          <p className="mt-2 text-sm text-gray-500">Skills Gained: {skills}</p>
        </div>
      </div>
    </div>
  );
};

const VerticalTimeline = () => {
  return (
    <div className="vertical-timeline container mx-auto py-8">
      {experiences.map((exp, index) => (
        <TimelineItem
          key={index}
          date={exp.date}
          title={exp.title}
          description={exp.description}
          skills={exp.skills}
        />
      ))}
    </div>
  );
};

export default VerticalTimeline;
