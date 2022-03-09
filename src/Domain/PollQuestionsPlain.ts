import { QuestionPlain } from "./QuestionPlain";

export interface PollQuestionsPlain {
  questionList: QuestionPlain[];
  currentQuestion?: QuestionPlain;
  currentQuestionIndex: number;
}
