import { QuizStore } from "src/Domain/QuizStore";
import { UseCase } from "./UseCase";

export const GoToTheNextQuestion: (props: {
  quizStore: QuizStore;
}) => UseCase<Promise<void>> = ({ quizStore }) => {
  const pollQuestion = quizStore.findPollQuestion();
  return {
    execute: async () => {
      const pollQuestionUpdated = await pollQuestion.nextQuestion();

      quizStore.updatePollQuestion(pollQuestionUpdated);
    },
  };
};
