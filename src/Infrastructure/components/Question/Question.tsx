import React, { FC, Fragment, useEffect } from "react";

import { CountdownPlain } from "src/Domain/CountdownPlain";
import { QuestionPlain } from "src/Domain/QuestionPlain";
import { useAnswerQuestion } from "src/Infrastructure/hooks/useAnswerQuestion";
import { useGoToTheNextQuestion } from "src/Infrastructure/hooks/useGoToTheNextQuestion";
import { useRouter } from "next/router";
import { useZustandViewQuizStore } from "src/Infrastructure/store/ZustandQuizStore";
import { Text } from "src/Infrastructure/components/Text";
import styles from "./Question.module.scss";
import { useCountdown } from "src/Infrastructure/hooks/useCountdown";

type QuestionProps = {
  question: QuestionPlain;
  countdown: ReturnType<typeof useCountdown>;
};

export const Question: FC<QuestionProps> = ({
  question,
  countdown: { countdown, restartCountdown, stopCountdown },
}) => {
  const router = useRouter();
  const {
    score,
    pollQuestion: { isLastQuestion },
  } = useZustandViewQuizStore();

  const { aswerQuestionRun } = useAnswerQuestion();
  const { goToTheNextQuestionRun } = useGoToTheNextQuestion();

  useEffect(() => {
    if (question?.wasAnswered) stopCountdown();
  }, [question?.wasAnswered, stopCountdown]);

  useEffect(() => {
    if ((question?.wasAnswered || countdown.timeIsOver) && !isLastQuestion) {
      goToTheNextQuestionRun().then(restartCountdown);
    }
  }, [
    countdown.timeIsOver,
    goToTheNextQuestionRun,
    isLastQuestion,
    question?.wasAnswered,
    restartCountdown,
  ]);

  useEffect(() => {
    const delay = setTimeout(() => {
      if ((question?.wasAnswered || countdown.timeIsOver) && isLastQuestion) {
        router.push("/quiz/result");
      }
    }, 3000);
    return () => clearTimeout(delay);
  }, [
    countdown.timeIsOver,
    goToTheNextQuestionRun,
    isLastQuestion,
    question?.wasAnswered,
    router,
  ]);

  return (
    <>
      <div className={styles.Question}>
        <Text>{question.value}</Text>
      </div>

      <ol className={styles.Question_answerList}>
        {question.answerList.map((answer, index) => (
          <Fragment key={answer.id}>
            {question.wasAnswered || countdown.timeIsOver ? (
              <li
                className={`${styles.Question_answer} ${
                  answer.isCorrect
                    ? styles.Question_border_lime
                    : styles.Question_border_orange
                }`}
              >
                {answer.value}
              </li>
            ) : (
              <li
                className={`${styles.Question_answer}`}
                onClick={() =>
                  aswerQuestionRun({
                    answerPlain: answer,
                    countdownPlain: countdown,
                    scorePlain: score,
                  })
                }
              >
                {answer.value}
              </li>
            )}
          </Fragment>
        ))}
      </ol>
    </>
  );
};
