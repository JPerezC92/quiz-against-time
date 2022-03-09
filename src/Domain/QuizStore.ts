import { Score } from "./Score";

export interface QuizStore {
  updateScore(score: Score): void;
}
