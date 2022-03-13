import { Rank } from "src/Domain/Rank";
import { RankingRepository } from "src/Domain/RankingRepository";
import { RankPlain } from "src/Domain/RankPlain";

const sortDescending = (a: RankPlain, b: RankPlain) => {
  return b.score.value - a.score.value;
};

export const LocalStorageRankingRepository: RankingRepository = {
  findRankings: (): Rank[] => {
    const localStorageItem = localStorage.getItem("rankings");

    const rankings = localStorageItem
      ? (JSON.parse(localStorageItem) as RankPlain[])
      : [];

    return rankings.map((rank) => Rank.fromPlain(rank)).sort(sortDescending);
  },

  saveRankings: (rankings: Rank[]): void => {
    const rankingPlainList = rankings.map((ranking) => ranking.toPlain());
    window.localStorage.setItem("rankings", JSON.stringify(rankingPlainList));
  },

  save: function (rank: Rank): void {
    const rankings = this.findRankings();
    const rankingsUpdated = [...rankings, rank]
      .sort(sortDescending)
      .slice(0, 10);

    this.saveRankings(rankingsUpdated);
  },
};
