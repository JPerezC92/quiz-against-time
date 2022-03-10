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
      pollQuestion: { questionList: [], currentQuestionIndex: 0 },
      score: Score.init().toPlain(),
      findPollQuestion: () => PollQuestion.fromPlain(get().pollQuestion),
      updateScore: (score) => set({ score: score.toPlain() }),
      updatePollQuestion: (pollQuestion) =>
        set({ pollQuestion: pollQuestion.toPlain() }),
    };
  }
);

// export const useZustandQuizStore2 = () => {
//   const quizViewStore = useZustandQuizStore<QuizStore>(
//     (state) => ({
//       updateScore: state.updateScore,
//     }),
//     shallow
//   );

//   return quizViewStore;
// };

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
