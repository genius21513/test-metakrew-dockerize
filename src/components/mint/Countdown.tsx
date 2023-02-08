import React, { useState, useEffect } from "react";
import { Box } from "theme-ui";
import { useMetaContext } from "../../context";

//import deadline from "../../constants/deadline";

// const StyledDiv = styled.div`
//   display: flex;

//   > Box {
//     padding: 0 20px;
//   }
// `;
// interface Ref {
//   interval: any;
// }

interface Props {
  setTimerActive: (state: boolean) => void;
}

export const Countdown: React.FC<Props> = ({ setTimerActive }) => {
  const [timerDays, setTimerDays] = useState<string>("00");
  const [timerHours, setTimerHours] = useState<string>("00");
  const [timerMinutes, setTimerMinutes] = useState<string>("00");
  const [timerSeconds, setTimerSeconds] = useState<string>("00");

  const { endClaimDeadline } = useMetaContext()

  const startTimer = (deadline: number) => {
    const interval = setInterval(
      async () => {
        const now = Math.round(new Date().getTime() / 1000);

        const distance = Number(deadline) - now;

        const days = Math.floor(distance / (60 * 60 * 24));
        const hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((distance % (60 * 60)) / 60);
        const seconds = Math.floor(distance % 60);

        if (distance < 0) {
          //stop timer
          setTimerActive(false);
          clearInterval(interval);
        } else {
          //update timer
          setTimerDays(days.toString());
          setTimerHours(hours.toString());
          setTimerMinutes(minutes.toString());
          setTimerSeconds(seconds.toString());
        }
      },

      1000
    );

    return interval
  };

  useEffect(() => {
    const interval = startTimer(endClaimDeadline);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        color: "white",
        mt: "1rem"
      }}
    >
      <Box sx={{ padding: "0 20px 0 0" }}>
        <p>{timerDays}</p>
        <p>Days</p>
      </Box>
      <span>|</span>
      <Box sx={{padding: "0 20px"}}>
        <p>{timerHours}</p>
        <p>Hours</p>
      </Box>
      <span>|</span>
      <Box sx={{padding: "0 20px"}}>
        <p>{timerMinutes}</p>
        <p>Minutes</p>
      </Box>
      <span>|</span>
      <Box sx={{padding: "0 20px"}}>
        <p>{timerSeconds}</p>
        <p>Seconds</p>
      </Box>
    </Box>
  );
};
