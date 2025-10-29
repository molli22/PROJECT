import React, { useState } from "react";
import userPic from "./images/user-picture.png";

function UserPic() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    //тут надо чтобы фотка юсера была
    <div>
      <img src="??????????" className="userPic" alt="profile picture" />
    </div>
  ) : (
    <div>
      <img
        src="/images/student-boy-icon.png"
        className="userPic"
        alt="user's profile picture"
      />
    </div>
  );
}

export default UserPic;
