import { Answer } from "./Answer";
import { AnswerPlain } from "./AnswerPlain";
import { QuestionPlain } from "./QuestionPlain";

export class Question {
  readonly value: string;
  readonly answerList: Answer[];

  constructor(props: { value: string; answers: Omit<AnswerPlain, "id">[] }) {
    this.value = props.value;
    this.answerList = props.answers.map((answer, i) =>
      Answer.fromPlain({ ...answer, id: i })
    );
  }

  toPlain(): QuestionPlain {
    return {
      value: this.value,
      answers: this.answerList.map((answer) => answer.toPlain()),
    };
  }
}
