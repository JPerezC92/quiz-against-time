import { Answer } from "src/Domain/Answer";
import { Countdown } from "src/Domain/Countdown";
import { QuizStore } from "src/Domain/QuizStore";
import { Score } from "src/Domain/Score";
import { UseCase } from "./UseCase";

interface AnswerQuestionInput {
  answer: Answer;
  countdown: Countdown;
  score: Score;
}

export const AnswerQuestion: (props: {
  quizStore: QuizStore;
}) => UseCase<void, AnswerQuestionInput> = ({ quizStore }) => {
  return {
    execute: ({ countdown, answer, score }) => {
      if (countdown.timeIsOver()) {
      }

      if (answer.isCorrect) {
        const scoreUpdated = score.addPoints(countdown);
        quizStore.updateScore(scoreUpdated);
      }
    },
  };
};
