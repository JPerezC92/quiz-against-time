import React, { FC, useEffect } from "react";

import { CountdownPlain } from "src/Domain/CountdownPlain";
import { QuestionPlain } from "src/Domain/QuestionPlain";
import { useAnswerQuestion } from "src/Infrastructure/hooks/useAnswerQuestion";
import { useGoToTheNextQuestion } from "src/Infrastructure/hooks/useGoToTheNextQuestion";
import { useRouter } from "next/router";
import { useZustandViewQuizStore } from "src/Infrastructure/store/ZustandQuizStore";

import styles from "./Question.module.scss";

type QuestionProps = {
  question: QuestionPlain;
  countdown: CountdownPlain;
};

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

      <ol className={styles.Question_answerList}>
        {question.answerList.map((answer, index) => (
          <>
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
                key={answer.id}
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
          </>
        ))}
      </ol>
    </>
  );
};
