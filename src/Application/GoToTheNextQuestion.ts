import { QuizStore } from "src/Domain/QuizStore";
import { UseCase } from "./UseCase";

export const GoToTheNextQuestion: (props: {
  quizStore: QuizStore;
}) => UseCase<void> = ({ quizStore }) => {
  const pollQuestion = quizStore.findPollQuestion();
  return {
    execute: () => {
      const pollQuestionUpdated = pollQuestion.nextQuestion();

      quizStore.updatePollQuestion(pollQuestionUpdated);
    },
  };
};
