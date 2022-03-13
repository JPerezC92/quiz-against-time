import React, { FC, useEffect } from "react";

import { Countdown } from "src/Domain/Countdown";
import { Question } from "../Question";
import { QuizLayout } from "../QuizLayout";
import { useCountdown } from "src/Infrastructure/hooks/useCountdown";
import { useInitializeQuiz } from "src/Infrastructure/hooks/useInitializeQuiz";
import { useZustandViewQuizStore } from "src/Infrastructure/store/ZustandQuizStore";
import styles from "./QuizScreen.module.scss";

export const QuizScreen: FC = React.memo(() => {
  const {
    score,
    pollQuestion: { currentQuestion, currentQuestionIndex },
  } = useZustandViewQuizStore();
  const { initializeQuizRun } = useInitializeQuiz();

  const countdown = useCountdown({
    countdownPlain: Countdown.new({ value: 30 }).toPlain(),
  });

  useEffect(() => {
    initializeQuizRun();
  }, [initializeQuizRun]);

  return (
    <>
      <QuizLayout>
        <header className={`${styles.Header}`}>
          <h1 className={`${styles.Title_2}`}>Score: {score.value}</h1>

          <h2 className={`${styles.Title_2}`}>
            Tiempo: {countdown.countdown?.remaining}
          </h2>
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
