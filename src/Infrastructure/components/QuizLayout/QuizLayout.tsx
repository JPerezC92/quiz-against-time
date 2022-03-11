import React, { FC } from "react";

import styles from "./QuizLayout.module.scss";

type QuizLayoutProps = {};

export const QuizLayout: FC<QuizLayoutProps> = ({ children }) => {
  return (
    <>
      <div className={`${styles.QuizLayout}`}>{children}</div>
    </>
  );
};
