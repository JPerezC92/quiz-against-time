import { RankingRepository } from "src/Domain/RankingRepository";
import { RankingStore } from "src/Domain/RankingStore";
import { UseCase } from "./UseCase";

export const FindRankings: (props: {
  rankingRepository: RankingRepository;
  rankingStore: RankingStore;
}) => UseCase<void> = ({ rankingRepository, rankingStore }) => {
  return {
    execute: () => {
      const rankings = rankingRepository.findRankings();
      rankingStore.saveRankings(rankings);
    },
  };
};
