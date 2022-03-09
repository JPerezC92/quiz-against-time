import React, { FC } from "react";
import { CountdownPlain } from "src/Domain/CountdownPlain";

import styles from "./Countdown.module.scss";

type CountdownProps = { countdown: CountdownPlain };

export const Countdown: FC<CountdownProps> = ({ countdown }) => {
  return (
    <>
      <span>
        <>{countdown.remaining}</>
      </span>
    </>
  );
};
