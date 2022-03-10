import { QuestionRepository } from "src/Domain/QuestionRepository";
import { QuizStore } from "src/Domain/QuizStore";
import { Score } from "src/Domain/Score";
import { UseCase } from "./UseCase";

export const InitializeQuiz: (props: {
  quizStore: QuizStore;
  questionRepository: QuestionRepository;
}) => UseCase<void> = ({ questionRepository, quizStore }) => {
  return {
    execute: () => {
      const questionList = questionRepository.findAll();
      quizStore.initializePollQuestion(questionList);
      quizStore.updateScore(Score.init());
    },
  };
};
