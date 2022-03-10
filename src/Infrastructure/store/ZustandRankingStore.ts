import create from "zustand";
import shallow from "zustand/shallow";

import { useCallback } from "react";
import { RankingStore } from "src/Domain/RankingStore";
import { RankPlain } from "src/Domain/RankPlain";

interface ViewRankingStore {
  rankingList: RankPlain[];
}

export const useZustandRankingStore = create<RankingStore & ViewRankingStore>(
  (set, get) => {
    return {
      rankingList: [],
      findRankings: () => get().findRankings(),
      saveRankings: (rankings) => set({ rankingList: rankings }),
    };
  }
);

export const useZustandViewRankingStore = () => {
  const quizViewStore = useZustandRankingStore<ViewRankingStore>(
    useCallback(
      (state) => ({
        rankingList: state.rankingList,
      }),
      []
    ),
    shallow
  );

  return quizViewStore;
};
