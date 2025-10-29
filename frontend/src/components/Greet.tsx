import React, { useState } from "react";

interface Props {
  name: string;
  surName: string;
}

const Greet = ({ name, surName }: Props) => {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) greeting = "Good morning";
  else if (hour < 18) greeting = "Good day";
  else greeting = "Good evening";

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <div>
      {greeting} {name} {surName}
    </div>
  ) : (
    <div>Welcome Guest</div>
  );

  //button to switch login state
};

export default Greet;
