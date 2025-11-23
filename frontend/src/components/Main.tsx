import React from "react";
import FuncClick from "./FuncClick";
import Greet from "./Greet";
import UserPic from "./UserPic";
import Current from "./Current";
import UpcomingExam from "./UpcomingExam";
// import FuncClick from "./components/FuncClick.js";
// import ClientGUI from "./ClientGUI";

function Main() {
  return (
    <main className="main">
      <div className="userpic">
        <UserPic />
        <Greet name="inessa" surName="tkach"></Greet>
      </div>
      <div className="current">
        <Current
          classRoom="0.43"
          subject="Computer Science"
          teacher="Natalie"
        ></Current>
        <UpcomingExam timeLeft="2:40:37" />
      </div>
      <div className="buttons-area">
        <FuncClick nameBtn="Grades" color="primary"></FuncClick>
        <FuncClick nameBtn="Schedule" color="secondary"></FuncClick>
        <FuncClick nameBtn="Classes" color="secondary"></FuncClick>
        <FuncClick nameBtn="announcements" color="secondary"></FuncClick>
        <FuncClick nameBtn="רישום שיעורי בית" color="secondary"></FuncClick>
        <FuncClick nameBtn="something" color="secondary"></FuncClick>
        <FuncClick nameBtn="something" color="secondary"></FuncClick>
        <FuncClick nameBtn="something" color="secondary"></FuncClick>
      </div>

      {/* WebSocket чат */}
      {/* <ClientGUI /> */}
    </main>
  );
}

export default Main;
