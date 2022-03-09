import { useCallback, useRef } from "react";

import { Answer } from "src/Domain/Answer";
import { AnswerPlain } from "src/Domain/AnswerPlain";
import { AnswerQuestion } from "src/Application/AnswerQuestion";
import { Countdown } from "src/Domain/Countdown";
import { CountdownPlain } from "src/Domain/CountdownPlain";
import { Score } from "src/Domain/Score";
import { ScorePlain } from "src/Domain/ScorePlain";
import { useZustandQuizStore } from "../store/ZustandQuizStore";

export const useAnswerQuestion = () => {
  const quizStore = useRef(useZustandQuizStore());

  const run: (props: {
    answerPlain: AnswerPlain;
    countdownPlain: CountdownPlain;
    scorePlain: ScorePlain;
  }) => void = useCallback(({ answerPlain, countdownPlain, scorePlain }) => {
    const aswerQuestion = AnswerQuestion({ quizStore: quizStore.current });

    aswerQuestion.execute({
      answer: Answer.fromPlain(answerPlain),
      countdown: Countdown.fromPlain(countdownPlain),
      score: Score.fromPlain(scorePlain),
    });
  }, []);

  return {
    run,
  };
};
