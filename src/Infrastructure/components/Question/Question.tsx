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

type QuestionProps = {
  question: QuestionPlain;
};

const timeoutBetweenQuestions = 3000;

export const Question: FC<QuestionProps> = ({ question }) => {
  const router = useRouter();
  const {
    score,
    pollQuestion: { isLastQuestion },
  } = useZustandViewQuizStore();
  const { aswerQuestionRun } = useAnswerQuestion();
  const { goToTheNextQuestionRun } = useGoToTheNextQuestion();

  const { countdown, stopCountdown, restartCountdown } = useCountdown({
    countdownPlain: CountdownEntity.new({ value: 10 }).toPlain(),
  });

  useEffect(() => {
    if (question.wasAnswered) stopCountdown();
  }, [question.wasAnswered, stopCountdown]);

  useEffect(() => {
    if (question.value) restartCountdown();
  }, [question.value, restartCountdown]);

  useEffect(() => {
    if ((question?.wasAnswered || countdown.timeIsOver) && !isLastQuestion) {
      setTimeout(() => goToTheNextQuestionRun(), timeoutBetweenQuestions);
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
        <span>{question.value}</span>
        <Countdown countdown={countdown} />
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
            {question.wasAnswered && <>{`${answer.isCorrect}`}</>}{" "}
            {answer.value}
          </li>
        ))}
      </ol>
    </>
  );
};
