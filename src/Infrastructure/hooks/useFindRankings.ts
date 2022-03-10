import { useCallback, useRef } from "react";

import { FindRankings } from "src/Application/FindRankings";
import { LocalStorageRankingRepository } from "../repositories/LocalStorageRankingRepository";
import { useZustandRankingStore } from "../store/ZustandRankingStore";

export const useFindRankings = () => {
  const rankingStore = useRef(useZustandRankingStore());
  const findRankingsRun = useCallback(() => {
    const findRankings = FindRankings({
      rankingRepository: LocalStorageRankingRepository,
      rankingStore: rankingStore.current,
    });

    findRankings.execute();
  }, []);

  return {
    findRankingsRun,
  };
};
