import { Question } from "src/Domain/Question";

export const questionList: Question[] = [
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

  Question.new({
    value:
      "¿Dónde acaba Isildur cuando le tienden una emboscada y pierde el Anillo Único?",
    answers: [
      { value: "En Bree", isCorrect: false },
      { value: "En el Campo de Celebrant", isCorrect: true },
      { value: "En el Monte del Destino", isCorrect: false },
    ],
  }),

  Question.new({
    value: "¿Por qué Frodo y Bilbo fueron a Valinor?",
    answers: [
      {
        value: "Para curar sus heridas como portadores del anillo",
        isCorrect: true,
      },
      { value: "Como regalo de los elfos", isCorrect: false },
      { value: "Para vivir nuevas aventuras", isCorrect: false },
    ],
  }),

  Question.new({
    value:
      "¿Cuántos días llevaba Gollum siguiendo el rastro de la Compañía cuando Frodo lo descubre en Moria?",
    answers: [
      { value: "2", isCorrect: false },
      { value: "3 ", isCorrect: true },
      { value: "5", isCorrect: false },
    ],
  }),

  Question.new({
    value: "¿Qué son los orcos?",
    answers: [
      {
        value: "Criaturas creadas por Saruman, que salían del barro",
        isCorrect: false,
      },
      {
        value:
          "Híbridos entre animales y otras criaturas, como hombres o Maiars",
        isCorrect: true,
      },
      {
        value: "Elfos corrompidos y, por tanto, inmortales",
        isCorrect: false,
      },
    ],
  }),

  Question.new({
    value:
      "¿Dónde está Gandalf cuando el Nazgûl persigue a los Hobbits en la frontera de la comarca?",
    answers: [
      { value: "En las Colinas del Viento", isCorrect: false },
      { value: "En Rivendel", isCorrect: false },
      { value: "En la Torre de Orthanc", isCorrect: true },
    ],
  }),

  Question.new({
    value:
      "¿Cuál de los siguientes grupos está formado por menos de nueve miembros?",
    answers: [
      { value: "Los Istari", isCorrect: true },
      { value: "La Compañía del Anillo", isCorrect: false },
      { value: "Los Nazgûl", isCorrect: false },
    ],
  }),

  Question.new({
    value:
      "¿Qué dos actores fueron los únicos miembros de la Compañía del Anillo que no llevaron ninguna prótesis?",
    answers: [
      { value: "Viggo Mortensen y Dominic Monaghan", isCorrect: false },
      { value: "Elijah Wood y Sean Bean", isCorrect: false },
      { value: "Viggo Mortensen y Sean Bean", isCorrect: true },
    ],
  }),

  Question.new({
    value:
      "¿En qué puerta se puede leer el siguiente rótulo: “Di amigo y entra”?",
    answers: [
      { value: "En la Puerta de Moria", isCorrect: true },
      { value: "En Bolsón Cerrado", isCorrect: false },
      { value: "En la Puerta de Bree", isCorrect: false },
    ],
  }),

  Question.new({
    value:
      "Las escenas principales de un personaje de la película se extrajeron de los anexos del libro, en lugar de la historia principal. ¿De qué personaje se trata?",
    answers: [
      { value: "Galadriel", isCorrect: false },
      { value: "Arwen", isCorrect: true },
      { value: "Faramir", isCorrect: false },
    ],
  }),

  Question.new({
    value: "¿Qué aspecto tiene Théoden cuando Galdalf le libera del hechizo?",
    answers: [
      { value: "Está igual", isCorrect: false },
      { value: "Más joven", isCorrect: false },
      { value: "Más viejo", isCorrect: true },
    ],
  }),

  Question.new({
    value:
      "¿A qué tres razas pertenecen los muertos de la Ciénaga de los Muertos?",
    answers: [
      { value: "Enanos, Hobbits y hombres", isCorrect: false },
      { value: "Hombres, enanos y elfos", isCorrect: false },
      { value: "Elfos, hombres y orcos", isCorrect: true },
    ],
  }),

  Question.new({
    value:
      "En la película, según Gimli, ¿dónde está el truco a la hora de perseguir a los Uruk-hai?",
    answers: [
      { value: "En la respiración adecuada", isCorrect: true },
      { value: "En apreciar sus huellas", isCorrect: false },
      { value: "En detectar su olor", isCorrect: false },
    ],
  }),

  Question.new({
    value:
      "¿Qué actor llevaba en un ojo una lentilla opaca para proyectar una mirada errática?",
    answers: [
      { value: "Andy Serkis", isCorrect: false },
      { value: "Brad Dourif", isCorrect: true },
      { value: "Marton Csokas", isCorrect: false },
    ],
  }),
];
