import React, { FC, useEffect } from "react";

import { Countdown } from "../Countdown";
import { Countdown as CountdownEntity } from "src/Domain/Countdown";
import { QuestionPlain } from "src/Domain/QuestionPlain";
import { useAnswerQuestion } from "src/Infrastructure/hooks/useAnswerQuestion";
import { useCountdown } from "src/Infrastructure/hooks/useCountdown";
import { useZustandViewQuizStore } from "src/Infrastructure/store/ZustandQuizStore";

import styles from "./Question.module.scss";
import { useGoToTheNextQuestion } from "src/Infrastructure/hooks/useGoToTheNextQuestion";
import { useRouter } from "next/router";
import { CountdownPlain } from "src/Domain/CountdownPlain";

type QuestionProps = {
  question: QuestionPlain;
  countdown: CountdownPlain;
};

const timeoutBetweenQuestions = 3000;

export const Question: FC<QuestionProps> = ({ question, countdown }) => {
  const router = useRouter();
  const {
    score,
    pollQuestion: { isLastQuestion },
  } = useZustandViewQuizStore();
  const { aswerQuestionRun } = useAnswerQuestion();
  const { goToTheNextQuestionRun } = useGoToTheNextQuestion();

  useEffect(() => {
    if ((question?.wasAnswered || countdown.timeIsOver) && !isLastQuestion) {
      goToTheNextQuestionRun();
    }
  }, [
    countdown.timeIsOver,
    goToTheNextQuestionRun,
    isLastQuestion,
    question?.wasAnswered,
  ]);

  useEffect(() => {
    if ((question?.wasAnswered || countdown.timeIsOver) && isLastQuestion) {
      setTimeout(() => router.push("/quiz/result"), 3000);
    }
  }, [
    countdown.timeIsOver,
    goToTheNextQuestionRun,
    isLastQuestion,
    question?.wasAnswered,
    router,
  ]);

  return (
    <>
      <div>
        <span className={`${styles.Title_3}`}>{question.value}</span>
      </div>

      <ol>
        {question.answerList.map((answer) => (
          <li
            key={answer.id}
            onClick={() =>
              aswerQuestionRun({
                answerPlain: answer,
                countdownPlain: countdown,
                scorePlain: score,
              })
            }
          >
            {question.wasAnswered && <>{`${answer.isCorrect}`}</>}
            {answer.value}
          </li>
        ))}
      </ol>
    </>
  );
};
