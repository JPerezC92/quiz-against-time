import { Rank } from "./Rank";

export interface RankingRepository {
  findRankings(): Rank[];
  saveRankings(rankings: Rank[]): void;
  save(rank: Rank): void;
}
