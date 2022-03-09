import { PollQuestion } from "src/Domain/PollQuestions";
import { QuestionRepository } from "src/Domain/QuestionRepository";
import { QuizStore } from "src/Domain/QuizStore";
import { UseCase } from "./UseCase";

export const FindQuestions: (props: {
  questionRepository: QuestionRepository;
  quizStore: QuizStore;
}) => UseCase<void> = ({ questionRepository, quizStore }) => {
  return {
    execute: () => {
      const questionList = questionRepository.findAll();
      const pollQuestion = PollQuestion.new({ questionList });

      quizStore.updatePollQuestion(pollQuestion);
    },
  };
};
