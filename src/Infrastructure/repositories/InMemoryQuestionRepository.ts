import { Question } from "src/Domain/Question";
import { QuestionRepository } from "src/Domain/QuestionRepository";
import { shuffleArray } from "src/Utils/shuffleArray";
import { questionList } from "./questions";

export const InMemoryQuestionRepository: QuestionRepository = {
  findAll: (): Question[] => {
    return shuffleArray(questionList).slice(0, 10);
  },
};
