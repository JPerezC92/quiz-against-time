import create from "zustand";
import shallow from "zustand/shallow";

import { QuizStore } from "src/Domain/QuizStore";
import { Score } from "src/Domain/Score";
import { ScorePlain } from "src/Domain/ScorePlain";

interface ViewQuizStore {
  score: ScorePlain;
}

export const useZustandQuizStore = create<QuizStore & ViewQuizStore>(
  (set, get) => {
    return {
      score: Score.init().toPlain(),
      updateScore: (score) => set({ score: score.toPlain() }),
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
    (state) => ({
      score: state.score,
    }),
    shallow
  );

  return quizViewStore;
};
