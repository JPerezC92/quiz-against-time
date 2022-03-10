import React, { FC, useEffect } from "react";
import Link from "next/link";

import { Question } from "../Question";
import { useZustandViewQuizStore } from "src/Infrastructure/store/ZustandQuizStore";
import { useFindQuestions } from "src/Infrastructure/hooks/useFindQuestions";

export const QuizScreen: FC = React.memo(() => {
  const {
    score,
    pollQuestion: { currentQuestion },
  } = useZustandViewQuizStore();

  const { findQuestionsRun } = useFindQuestions();

  useEffect(() => {
    findQuestionsRun();
  }, [findQuestionsRun]);

  return (
    <div>
      <span>{score.value}</span>

      {currentQuestion && <Question question={currentQuestion} />}

      <Link href="/">Home</Link>
    </div>
  );
});

QuizScreen.displayName = "QuizScreen";
