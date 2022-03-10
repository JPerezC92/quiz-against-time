import create from "zustand";
import shallow from "zustand/shallow";

import { QuizStore } from "src/Domain/QuizStore";
import { Score } from "src/Domain/Score";
import { ScorePlain } from "src/Domain/ScorePlain";
import { useCallback } from "react";
import { PollQuestion } from "src/Domain/PollQuestions";
import { PollQuestionsPlain } from "src/Domain/PollQuestionsPlain";

interface ViewQuizStore {
  score: ScorePlain;
  pollQuestion: PollQuestionsPlain;
}

export const useZustandQuizStore = create<QuizStore & ViewQuizStore>(
  (set, get) => {
    return {
      pollQuestion: {
        questionList: [],
        currentQuestionIndex: 0,
        isLastQuestion: false,
      },
      score: Score.init().toPlain(),
      findPollQuestion: () => PollQuestion.fromPlain(get().pollQuestion),
      initializePollQuestion: (questionList) =>
        set({ pollQuestion: PollQuestion.new({ questionList }).toPlain() }),
      updateScore: (score) => set({ score: score.toPlain() }),
      updatePollQuestion: (pollQuestion) =>
        set({ pollQuestion: pollQuestion.toPlain() }),
    };
  }
);

export const useZustandViewQuizStore = () => {
  const quizViewStore = useZustandQuizStore<ViewQuizStore>(
    useCallback(
      (state) => ({
        score: state.score,
        pollQuestion: state.pollQuestion,
      }),
      []
    ),
    shallow
  );

  return quizViewStore;
};
