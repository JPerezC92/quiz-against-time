import React, { FC } from "react";

import styles from "./Quiz.module.scss";

type QuizProps = {};

export const Quiz: FC<QuizProps> = (props) => {
  return (
    <div>
      <h1>Quiz</h1>
      <button type="button">Comenzar</button>
      <button type="button">Ranking</button>
    </div>
  );
};
