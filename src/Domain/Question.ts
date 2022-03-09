import { Answer } from "./Answer";
import { AnswerPlain } from "./AnswerPlain";
import { QuestionPlain } from "./QuestionPlain";

export class Question {
  readonly value: string;
  readonly answerList: Answer[];
  readonly wasAnswered: boolean;

  constructor(props: {
    value: string;
    answers: AnswerPlain[];
    wasAnswered: boolean;
  }) {
    this.value = props.value;
    this.answerList = props.answers.map((answer, i) =>
      Answer.fromPlain({ ...answer, id: i })
    );
    this.wasAnswered = props.wasAnswered;
  }

  static new(props: {
    value: string;
    answers: Omit<AnswerPlain, "id">[];
  }): Question {
    const { value, answers } = props;
    return new Question({
      value: value,
      answers: answers.map((answer, i) =>
        Answer.fromPlain({ ...answer, id: i })
      ),
      wasAnswered: false,
    });
  }

  static fromPlain(props: QuestionPlain): Question {
    return new Question({
      value: props.value,
      answers: props.answerList,
      wasAnswered: props.wasAnswered,
    });
  }

  public toPlain(): QuestionPlain {
    return {
      value: this.value,
      answerList: this.answerList.map((answer) => answer.toPlain()),
      wasAnswered: this.wasAnswered,
    };
  }
}
