import { AnswerPlain } from "./AnswerPlain";

export interface QuestionPlain {
  value: string;
  answerList: AnswerPlain[];
  wasAnswered: boolean;
}
