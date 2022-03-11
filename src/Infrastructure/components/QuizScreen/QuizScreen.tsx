import React, { FC, useEffect } from "react";
import Link from "next/link";

import { Question } from "../Question";
import { useZustandViewQuizStore } from "src/Infrastructure/store/ZustandQuizStore";
import { useInitializeQuiz } from "src/Infrastructure/hooks/useInitializeQuiz";
import styles from "./QuizScreen.module.scss";
import { QuizLayout } from "../QuizLayout";
import { useCountdown } from "src/Infrastructure/hooks/useCountdown";
import { Countdown } from "src/Domain/Countdown";

export const QuizScreen: FC = React.memo(() => {
  const {
    score,
    pollQuestion: { currentQuestion },
  } = useZustandViewQuizStore();
  const { initializeQuizRun } = useInitializeQuiz();
  const { countdown, stopCountdown, restartCountdown } = useCountdown({
    countdownPlain: Countdown.new({ value: 10 }).toPlain(),
  });

  useEffect(() => {
    initializeQuizRun();
  }, [initializeQuizRun]);

  useEffect(() => {
    if (currentQuestion?.wasAnswered) stopCountdown();
  }, [currentQuestion?.wasAnswered, stopCountdown]);

  useEffect(() => {
    if (currentQuestion?.value) restartCountdown();
  }, [currentQuestion?.value, restartCountdown]);

  return (
    <>
      <QuizLayout>
        <header className={`${styles.Header}`}>
          <h1 className={`${styles.Title_2}`}>Score: {score.value}</h1>

          <h2 className={`${styles.Title_2}`}>Tiempo: {countdown.remaining}</h2>
        </header>

        <hr />
        {currentQuestion && (
          <Question question={currentQuestion} countdown={countdown} />
        )}
      </QuizLayout>
    </>
  );
});

QuizScreen.displayName = "QuizScreen";
