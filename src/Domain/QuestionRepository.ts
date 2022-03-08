import { Question } from "./Question";

export interface QuestionRepository {
  findAll(): Question[];
}
