import { useCallback, useEffect, useState } from "react";
import { Countdown } from "src/Domain/Countdown";
import { CountdownPlain } from "src/Domain/CountdownPlain";

const seconds = 1000;

export const useCountdown: (props: { countdownPlain: CountdownPlain }) => {
  countdown: CountdownPlain;
  stopCountdown: () => void;
  restartCountdown: () => void;
} = ({ countdownPlain }) => {
  const [countdown, setCountdown] = useState(countdownPlain);

  const [isStopped, setIsStopped] = useState(false);

  const stopCountdown = useCallback(() => setIsStopped(() => true), []);
  const restartCountdown = useCallback(() => {
    setIsStopped(() => false);
    setCountdown((c) => Countdown.fromPlain(c).restart().toPlain());
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timer;

    if (!countdown.timeIsOver && !isStopped) {
      interval = setInterval(() => {
        setCountdown((prevCountdownPlain) =>
          Countdown.fromPlain(prevCountdownPlain).tick().toPlain()
        );
      }, seconds);
    }

    return () => {
      clearInterval(interval);
    };
  }, [countdown.timeIsOver, isStopped]);

  return { countdown, stopCountdown, restartCountdown };
};
