import React, { FC, Fragment, useEffect } from "react";

import { QuestionPlain } from "src/Domain/QuestionPlain";
import { Text } from "src/Infrastructure/components/Text";
import { useAnswerQuestion } from "src/Infrastructure/hooks/useAnswerQuestion";
import { useCountdown } from "src/Infrastructure/hooks/useCountdown";
import { useGoToTheNextQuestion } from "src/Infrastructure/hooks/useGoToTheNextQuestion";
import { useRouter } from "next/router";
import { useZustandViewQuizStore } from "src/Infrastructure/store/ZustandQuizStore";
import styles from "./Question.module.scss";

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
    pollQuestion: { isLastQuestion, currentQuestionIndex },
  } = useZustandViewQuizStore();

  const { aswerQuestionRun } = useAnswerQuestion();
  const { goToTheNextQuestionRun } = useGoToTheNextQuestion();

  const canGoToTheNextStep = question?.wasAnswered || countdown.timeIsOver;
  const canGoToTheNextQuestion = canGoToTheNextStep && !isLastQuestion;
  const canGoToTheResultScreen = canGoToTheNextStep && isLastQuestion;

  const questionNumber = currentQuestionIndex + 1;

  useEffect(() => {
    if (question?.wasAnswered) stopCountdown();
  }, [question?.wasAnswered, stopCountdown]);

  useEffect(() => {
    if (canGoToTheNextQuestion) {
      goToTheNextQuestionRun().then(restartCountdown);
    }
  }, [canGoToTheNextQuestion, goToTheNextQuestionRun, restartCountdown]);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (canGoToTheResultScreen) router.push("/quiz/result");
    }, 3000);

    return () => clearTimeout(delay);
  }, [canGoToTheResultScreen, router]);

  return (
    <>
      <div className={styles.Question}>
        <Text>
          {questionNumber}. {question.value}
        </Text>
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
