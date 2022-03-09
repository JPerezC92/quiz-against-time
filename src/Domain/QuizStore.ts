import { PollQuestion } from "./PollQuestions";
import { Score } from "./Score";

export interface QuizStore {
  updateScore(score: Score): void;
  updatePollQuestion(pollQuestions: PollQuestion): void;
}
