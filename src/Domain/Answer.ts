import { AnswerPlain } from "./AnswerPlain";

export class Answer {
  id: number;
  value: string;
  isCorrect: boolean;

  constructor(props: { id: number; value: string; isCorrect: boolean }) {
    this.id = props.id;
    this.value = props.value;
    this.isCorrect = props.isCorrect;
  }

  public static fromPlain(plain: AnswerPlain): Answer {
    return new Answer({
      id: plain.id,
      value: plain.value,
      isCorrect: plain.isCorrect,
    });
  }

  public toPlain(): AnswerPlain {
    return {
      id: this.id,
      value: this.value,
      isCorrect: this.isCorrect,
    };
  }
}
