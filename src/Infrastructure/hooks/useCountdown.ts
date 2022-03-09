import { useEffect, useState } from "react";
import { Countdown } from "src/Domain/Countdown";
import { CountdownPlain } from "src/Domain/CountdownPlain";

const seconds = 1000;

export const useCountdown: (props: {
  countdownPlain: CountdownPlain;
}) => CountdownPlain = ({ countdownPlain }) => {
  const [countdown, setCountdown] = useState(countdownPlain);

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (!countdown.timeIsOver) {
      interval = setInterval(() => {
        setCountdown((prevCountdownPlain) =>
          Countdown.fromPlain(prevCountdownPlain).tick().toPlain()
        );
      }, seconds);
    }

    return () => {
      clearInterval(interval);
    };
  }, [countdown.timeIsOver]);

  return countdown;
};
