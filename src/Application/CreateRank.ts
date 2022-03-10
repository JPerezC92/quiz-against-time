import { QuizStore } from "src/Domain/QuizStore";
import { Rank } from "src/Domain/Rank";
import { RankingRepository } from "src/Domain/RankingRepository";
import { RankingStore } from "src/Domain/RankingStore";
import { Score } from "src/Domain/Score";
import { UseCase } from "./UseCase";

interface CreateRankInput {
  name: string;
  score: Score;
}

export const CreateRank: (props: {
  rankingStore: RankingStore;
  rankingRepository: RankingRepository;
}) => UseCase<void, CreateRankInput> = ({
  rankingRepository,
  rankingStore,
}) => {
  return {
    execute: ({ name, score }) => {
      const newRank = Rank.new({ name, score });
      rankingRepository.save(newRank);

      const rankingsUpdated = rankingRepository.findRankings();
      rankingStore.saveRankings(rankingsUpdated);
    },
  };
};
