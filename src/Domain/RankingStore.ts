import { Rank } from "./Rank";

export interface RankingStore {
  findRankings(): Rank[];
  saveRankings(rankings: Rank[]): void;
}
