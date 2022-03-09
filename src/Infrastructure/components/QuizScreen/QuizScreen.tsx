import React, { FC, useState } from "react";
import Link from "next/link";

import { InMemoryQuestionRepository } from "src/Infrastructure/InMemoryQuestionRepository";
import { Question } from "../Question";
import { useZustandViewQuizStore } from "src/Infrastructure/store/ZustandQuizStore";

export const QuizScreen: FC = React.memo(() => {
  const { score } = useZustandViewQuizStore();

  const [questions, setQuestions] = useState(
    InMemoryQuestionRepository.findAll().map((question) => question.toPlain())
  );

  return (
    <div>
      <span>{score.value}</span>
      <Question question={questions[0]} />

      <Link href="/">Home</Link>
    </div>
  );
});

QuizScreen.displayName = "QuizScreen";
