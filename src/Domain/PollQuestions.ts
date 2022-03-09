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

  public nextQuestion(): PollQuestion {
    const question = this.toPlain();
    const nextQuestionIndex = this.nextQuestionIndex();
    const nextQuestion = question.questionList[nextQuestionIndex];

    return PollQuestion.fromPlain({
      ...question,
      currentQuestionIndex: this.nextQuestionIndex(),
      currentQuestion: nextQuestion,
    });
  }

  private nextQuestionIndex(): number {
    return this.currentQuestionIndex + 1;
  }

  public toPlain(): PollQuestionsPlain {
    return {
      questionList: this.questionList.map((question) => question.toPlain()),
      currentQuestion: this.currentQuestion?.toPlain(),
      currentQuestionIndex: this.currentQuestionIndex,
    };
  }
}
