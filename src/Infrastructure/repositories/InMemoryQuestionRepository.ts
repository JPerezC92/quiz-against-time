import { Question } from "src/Domain/Question";
import { QuestionRepository } from "src/Domain/QuestionRepository";

export const InMemoryQuestionRepository: QuestionRepository = {
  findAll: (): Question[] => {
    return [
      Question.new({
        value:
          "¿Cuál es la criatura que lleva más tiempo viviendo en la Tierra Media? ",
        answers: [
          { value: "Gandalf", isCorrect: false },
          { value: "Tom Bombadil", isCorrect: true },
          { value: "Sauron", isCorrect: false },
        ],
      }),
      Question.new({
        value:
          "¿Cuántas nominaciones a los Óscar recibió 'La Comunidad del Anillo'?",
        answers: [
          { value: "7", isCorrect: false },
          { value: "11", isCorrect: false },
          { value: "13", isCorrect: true },
        ],
      }),

      Question.new({
        value:
          "En la película, ¿quién pronunció en el Concilio de Elrond la siguiente frase: “os hace falta gente inteligente para este tipo de... misión... cometido... cosa”?",
        answers: [
          { value: "Merry", isCorrect: false },
          { value: "Pippin", isCorrect: true },
          { value: "Sam", isCorrect: false },
        ],
      }),
    ];
  },
};
