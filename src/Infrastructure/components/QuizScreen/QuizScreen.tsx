import React, { FC, useEffect } from "react";
import Link from "next/link";

import { Question } from "../Question";
import { useZustandViewQuizStore } from "src/Infrastructure/store/ZustandQuizStore";
import { useFindQuestions } from "src/Infrastructure/hooks/useFindQuestions";

export const QuizScreen: FC = React.memo(() => {
  const { score, pollQuestion } = useZustandViewQuizStore();
  const { findQuestionsRun } = useFindQuestions();

  useEffect(() => {
    findQuestionsRun();
  }, [findQuestionsRun]);

  return (
    <div>
      <span>{score.value}</span>

      {pollQuestion.currentQuestion && (
        <Question question={pollQuestion.currentQuestion} />
      )}

      <Link href="/">Home</Link>
    </div>
  );
});

QuizScreen.displayName = "QuizScreen";
