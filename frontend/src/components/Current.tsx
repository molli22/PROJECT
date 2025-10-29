import React from "react";

interface Props {
  classRoom?: string;
  subject?: string;
  teacher?: string;
}

function Current({ classRoom, subject, teacher }: Props) {
  const time = new Date().toLocaleTimeString();
  return (
    <div className="current">
      <h1>{time}</h1>
      <h3>Classroom: {classRoom}</h3>
      <h5>Subject: {subject}</h5>
      <h5>Teacher: {teacher}</h5>

      {/* <details>
        <summary>Subject: {subject}</summary>
        <p>Teacher: {teacher}</p>
      </details> */}
    </div>
  );
}

export default Current;
