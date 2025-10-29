import React from "react";

interface Props {
  timeLeft: string; //Date?
}

function UpcomingExam({ timeLeft }: Props) {
  return (
    <div className="upcomingexam">
      <h5>NEXT EXAM:</h5>
      <p>{timeLeft}</p>
      {/*<p>{timeLeft.toString()}</p>*/}
    </div>
  );
}

export default UpcomingExam;
