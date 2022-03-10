import { useCallback, useRef } from "react";

import { InitializeQuiz } from "src/Application/InitializeQuiz";
import { InMemoryQuestionRepository } from "../repositories/InMemoryQuestionRepository";
import { useZustandQuizStore } from "../store/ZustandQuizStore";

export const useInitializeQuiz = () => {
  const quizStore = useRef(useZustandQuizStore());

  const initializeQuizRun = useCallback(() => {
    const initializeQuiz = InitializeQuiz({
      questionRepository: InMemoryQuestionRepository,
      quizStore: quizStore.current,
    });

    initializeQuiz.execute();
  }, []);

  return {
    initializeQuizRun,
  };
};
