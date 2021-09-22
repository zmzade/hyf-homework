import React, { useState, useEffect } from "react";

const Timer = (props) => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTimer(timer + 1);
    }, 1000);
  });

  return <div> You have used {timer} seconds</div>;
};

export default Timer;
