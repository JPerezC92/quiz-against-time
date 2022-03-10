import React, { useCallback, useRef } from "react";
import { CreateRank } from "src/Application/CreateRank";
import { Score } from "src/Domain/Score";
import { ScorePlain } from "src/Domain/ScorePlain";
import { LocalStorageRankingRepository } from "../repositories/LocalStorageRankingRepository";
import { useZustandRankingStore } from "../store/ZustandRankingStore";

export const useCreateRank = () => {
  const rankingStore = useRef(useZustandRankingStore());

  const createRankRun: (props: { name: string; score: ScorePlain }) => void =
    useCallback(({ name, score }) => {
      const createRank = CreateRank({
        rankingRepository: LocalStorageRankingRepository,
        rankingStore: rankingStore.current,
      });

      createRank.execute({
        name: name,
        score: Score.fromPlain(score),
      });
    }, []);

  return { createRankRun };
};
