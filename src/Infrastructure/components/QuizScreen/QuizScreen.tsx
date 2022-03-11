import React, { FC, useEffect } from "react";
import Link from "next/link";

import { Question } from "../Question";
import { useZustandViewQuizStore } from "src/Infrastructure/store/ZustandQuizStore";
import { useInitializeQuiz } from "src/Infrastructure/hooks/useInitializeQuiz";
import styles from "./QuizScreen.module.scss";
import { QuizLayout } from "../QuizLayout";

export const QuizScreen: FC = React.memo(() => {
  const {
    score,
    pollQuestion: { currentQuestion },
  } = useZustandViewQuizStore();

  const { initializeQuizRun } = useInitializeQuiz();

  useEffect(() => {
    // initializeQuizRun();
  }, [initializeQuizRun]);

  return (
    <>
      <QuizLayout>
        <div className={`${styles.QuizScreen}`}>
          <span>{score.value}</span>

          {currentQuestion && <Question question={currentQuestion} />}

          <Link href="/">Home</Link>
        </div>
      </QuizLayout>
    </>
  );
});

QuizScreen.displayName = "QuizScreen";
