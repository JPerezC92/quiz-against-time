import React, { FC, useEffect } from "react";

import { Countdown } from "../Countdown";
import { Countdown as CountdownEntity } from "src/Domain/Countdown";
import { QuestionPlain } from "src/Domain/QuestionPlain";
import { useAnswerQuestion } from "src/Infrastructure/hooks/useAnswerQuestion";
import { useCountdown } from "src/Infrastructure/hooks/useCountdown";
import { useZustandViewQuizStore } from "src/Infrastructure/store/ZustandQuizStore";

import styles from "./Question.module.scss";

type QuestionProps = {
  question: QuestionPlain;
};

export const Question: FC<QuestionProps> = ({ question }) => {
  const { score } = useZustandViewQuizStore();

  const countdown = useCountdown({
    countdownPlain: CountdownEntity.new({ value: 10 }).toPlain(),
  });

  const answerQuestion = useAnswerQuestion();

  useEffect(() => {
    if (countdown.timeIsOver) {
      console.log("se termino el tiempo");
    }
  }, [countdown.timeIsOver]);

  return (
    <>
      <div>
        <span>{question.value}</span>
        <Countdown countdown={countdown} />
      </div>

      <ol>
        {question.answers.map((answer) => (
          <li
            key={answer.id}
            onClick={() =>
              answerQuestion.run({
                answerPlain: answer,
                countdownPlain: countdown,
                scorePlain: score,
              })
            }
          >
            {answer.value}
          </li>
        ))}
      </ol>
    </>
  );
};
