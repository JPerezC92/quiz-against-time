import { Answer } from "./Answer";
import { PollQuestionsPlain } from "./PollQuestionsPlain";
import { Question } from "./Question";

export class PollQuestion {
  readonly currentQuestion?: Question;
  readonly currentQuestionIndex: number;
  readonly questionList: Question[];

  constructor(props: {
    questionList: Question[];
    currentQuestionIndex: number;
  }) {
    const { questionList, currentQuestionIndex } = props;
    this.currentQuestionIndex = currentQuestionIndex;
    this.questionList = questionList;

    this.currentQuestion = questionList[currentQuestionIndex];
  }

  public static new(props: { questionList: Question[] }): PollQuestion {
    const { questionList } = props;

    return new PollQuestion({
      questionList,
      currentQuestionIndex: 0,
    });
  }

  public static fromPlain(props: PollQuestionsPlain): PollQuestion {
    return new PollQuestion({
      questionList: props.questionList.map((question) =>
        Question.fromPlain(question)
      ),
      currentQuestionIndex: props.currentQuestionIndex,
    });
  }

  public answerQuestion(answer: Answer): PollQuestion {
    if (!this.currentQuestion) return this;

    this.questionList[this.currentQuestionIndex] =
      this.currentQuestion?.answerQuestion(answer);
    const pollQuestion = this.toPlain();

    return PollQuestion.fromPlain({
      ...pollQuestion,
      questionList: this.questionList,
    });
  }

  public nextQuestion(): PollQuestion {
    const pollQuestion = this.toPlain();
    const nextQuestionIndex = this._nextQuestionIndex();
    const nextQuestion = pollQuestion.questionList[nextQuestionIndex];

    return PollQuestion.fromPlain({
      ...pollQuestion,
      currentQuestionIndex: nextQuestionIndex,
      currentQuestion: nextQuestion,
    });
  }

  public isLastQuestion(): boolean {
    return this.currentQuestionIndex === this.questionList.length - 1;
  }

  private _nextQuestionIndex(): number {
    return this.currentQuestionIndex + 1;
  }

  public toPlain(): PollQuestionsPlain {
    return {
      questionList: this.questionList.map((question) => question.toPlain()),
      currentQuestion: this.currentQuestion?.toPlain(),
      currentQuestionIndex: this.currentQuestionIndex,
      isLastQuestion: this.isLastQuestion(),
    };
  }
}
