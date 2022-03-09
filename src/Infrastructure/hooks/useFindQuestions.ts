import { useCallback, useRef } from "react";
import { FindQuestions } from "src/Application/FindQuestions";
import { InMemoryQuestionRepository } from "../repositories/InMemoryQuestionRepository";

import { useZustandQuizStore } from "../store/ZustandQuizStore";

export const useFindQuestions = () => {
  const quizStore = useRef(useZustandQuizStore());

  const findQuestionsRun = useCallback(() => {
    const findQuestions = FindQuestions({
      questionRepository: InMemoryQuestionRepository,
      quizStore: quizStore.current,
    });

    findQuestions.execute();
  }, []);

  return {
    findQuestionsRun,
  };
};
