import { PollQuestion } from "./PollQuestions";
import { Question } from "./Question";
import { Score } from "./Score";

export interface QuizStore {
  findPollQuestion(): PollQuestion;
  initializePollQuestion(question: Question[]): void;
  updatePollQuestion(pollQuestions: PollQuestion): void;
  updateScore(score: Score): void;
}
