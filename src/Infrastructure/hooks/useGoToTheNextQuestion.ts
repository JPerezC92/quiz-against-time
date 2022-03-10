import { useCallback, useRef } from "react";
import { GoToTheNextQuestion } from "src/Application/GoToTheNextQuestion";

import { useZustandQuizStore } from "../store/ZustandQuizStore";

export const useGoToTheNextQuestion = () => {
  const quizStore = useRef(useZustandQuizStore());

  const goToTheNextQuestionRun = useCallback(async () => {
    const goToTheNextQuestion = GoToTheNextQuestion({
      quizStore: quizStore.current,
    });

    await goToTheNextQuestion.execute();
  }, []);

  return {
    goToTheNextQuestionRun,
  };
};
