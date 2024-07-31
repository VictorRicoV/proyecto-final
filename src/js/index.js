// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

// const quizContainer = document.getElementById('quiz-container');
// const questionElement = document.getElementById('question');
// const optionsContainer = document.getElementById('options');
// const buttonElement = document.getElementById('button');
// const resultContainer = document.getElementById('result');
// const textResultElement = document.getElementById('text-result');
// const roleImage = document.getElementById('role-image');
// const agentImage = document.getElementById('agent-image');

// const questions = [
//   {
//     question: 'Estilo de Juego Preferido en FPS:',
//     options: [
//       { text: 'Agresivo, liderando el ataque', value: 'duelist' },
//       { text: 'Defensivo, protegiendo a mis compañeros', value: 'sentinel' },
//       { text: 'Estratégico, controlando el mapa', value: 'controller' },

//       { text: 'Apoyo, asegurando el éxito del equipo', value: 'initiator' }
//     ]
//   },
//   {
//     question: 'Habilidad Más Importante',
//     options: [
//       { text: 'Infligir daño masivo', value: 'duelist' },
//       { text: 'Curar y revivir a tus compañeros', value: 'sentinel' },
//       {
//         text: 'Colocar trampas y controlar áreas',
//         value: 'controller, sentinel'
//       },
//       { text: 'Recoger y comunicar información', value: 'initiator' }
//     ]
//   },
//   {
//     question: '¿Cómo Prefieres Enfrentarte a los Enemigos?',
//     options: [
//       { text: 'Directamente y de cerca', value: 'duelist' },
//       { text: 'Desde una distancia segura', value: 'sentinel' },
//       {
//         text: 'Utilizando emboscadas y trampas',
//         value: 'controller, sentinel'
//       },
//       {
//         text: 'Observando sus movimientos y atacando cuando están distraídos',
//         value: 'initiator'
//       }
//     ]
//   },
//   {
//     question: 'Tipo de Armas Preferidas',
//     options: [
//       { text: 'Escopetas y subfusiles', value: 'duelist' },
//       {
//         text: 'Rifles de francotirador y armas a larga distancia',
//         value: 'sentinel'
//       },
//       {
//         text: 'Fusiles de asalto y armas versátiles',
//         value: 'controller, initiator'
//       },
//       {
//         text: 'Pistolas y armas secundarias',
//         value: 'duelist'
//       }
//     ]
//   },
//   {
//     question: 'Ser la Primera Persona en Entrar en Combate',
//     options: [
//       { text: 'Me encanta, soy el primero en entrar', value: 'duelist' },
//       {
//         text: 'Prefiero seguir a otros y apoyar desde atrás',
//         value: 'sentinel'
//       },
//       {
//         text: 'Entro solo si tengo un plan claro',
//         value: 'controller, initiator'
//       },
//       {
//         text: 'Prefiero observar y analizar antes de entrar',
//         value: 'initiator'
//       }
//     ]
//   },
//   {
//     question: 'Motivación en una Partida de Equipo',
//     options: [
//       { text: 'Obtener muchas eliminaciones', value: 'duelist' },
//       { text: 'Asegurarte de que tu equipo sobreviva', value: 'sentinel' },
//       {
//         text: 'Desbaratar las estrategias del enemigo',
//         value: 'controller'
//       },
//       {
//         text: 'Proporcionar información crucial a tu equipo',
//         value: 'initiator'
//       }
//     ]
//   },
//   {
//     question: 'Habilidades Favoritas en un Personaje',
//     options: [
//       { text: 'Habilidades ofensivas y destructivas', value: 'duelist' },
//       { text: 'Habilidades de curación y defensa', value: 'sentinel' },
//       {
//         text: 'Habilidades de control de zonas y trampas',
//         value: 'controller, sentinel'
//       },
//       {
//         text: 'Habilidades de detección y sigilo',
//         value: 'initiator'
//       }
//     ]
//   },
//   {
//     question: 'Acciones Ante un Compañero en Problemas',
//     options: [
//       { text: 'Cargar contra el enemigo para ayudar', value: 'duelist' },
//       {
//         text: 'Usar una habilidad para proteger o curar a tu compañero',
//         value: 'sentinel'
//       },
//       {
//         text: 'Colocar una trampa para desviar la atención del enemigo',
//         value: 'controller, sentinel'
//       },
//       {
//         text: 'Informar a tu equipo y buscar una forma de flanquear al enemigo',
//         value: 'initiator'
//       }
//     ]
//   },
//   {
//     question: 'Preferencia entre Defensa o Ataque',
//     options: [
//       { text: 'Ataque, me gusta la acción', value: 'duelist' },
//       {
//         text: 'Defensa, me gusta proteger y mantener posiciones',
//         value: 'sentinel'
//       },
//       {
//         text: 'Depende de la situación, puedo adaptarme',
//         value: 'controller'
//       },
//       {
//         text: 'Me gusta observar y adaptarme según sea necesario',
//         value: 'initiator'
//       }
//     ]
//   },
//   {
//     question: 'Manejo de la Presión en Partidas Competitivas',
//     options: [
//       {
//         text: 'Mantengo la calma y me concentro en eliminar enemigos',
//         value: 'duelist'
//       },
//       {
//         text: 'Me enfoco en apoyar a mi equipo y mantenerlos con vida',
//         value: 'sentinel'
//       },
//       {
//         text: 'Uso mi ingenio para crear oportunidades tácticas',
//         value: 'controller'
//       },
//       {
//         text: 'Analizo la situación y proporciono la mejor información posible',
//         value: 'initiator'
//       }
//     ]
//   }
// ];

// let currentQuestionIndex = 0;
// let score = {
//   duelist: 0,
//   sentinel: 0,
//   controller: 0,
//   initiator: 0
// };

// const agents = {
//   duelist: [
//     { name: 'Jett', minScore: 5, image: '../assets/images/jett.png' },
//     { name: 'Phoenix', minScore: 3, image: '../assets/images/phoenix.png' },
//     { name: 'Reyna', minScore: 3, image: '../assets/images/reyna.png' },
//     { name: 'Raze', minScore: 2, image: '../assets/images/raze.png' },
//     { name: 'Neon', minScore: 1, image: '../assets/images/neon.png' },
//     { name: 'Yoru', minScore: 1, image: '../assets/images/yoru.png' }
//   ],
//   sentinel: [
//     { name: 'Sage', minScore: 5, image: '../assets/images/sage.png' },
//     { name: 'Cypher', minScore: 4, image: '../assets/images/cypher.png' },
//     { name: 'Killjoy', minScore: 3, image: '../assets/images/killjoy.png' },
//     { name: 'Chamber', minScore: 2, image: '../assets/images/chamber.png' },
//     { name: 'Deadlock', minScore: 1, image: '../assets/images/deadlock.png' }
//   ],
//   controller: [
//     { name: 'Brimstone', minScore: 5, image: '../assets/images/brimstone.png' },
//     { name: 'Omen', minScore: 4, image: '../assets/images/omen.png' },
//     { name: 'Viper', minScore: 3, image: '../assets/images/viper.png' },
//     { name: 'Astra', minScore: 2, image: '../assets/images/astra.png' },
//     { name: 'Harbor', minScore: 1, image: '../assets/images/harbor.png' }
//   ],
//   initiator: [
//     { name: 'Sova', minScore: 5, image: '../assets/images/sova.png' },
//     { name: 'Breach', minScore: 4, image: '../assets/images/breach.png' },
//     { name: 'Skye', minScore: 3, image: '../assets/images/skye.png' },
//     { name: 'KAY/O', minScore: 2, image: '../assets/images/kayo.png' },
//     { name: 'Gekko', minScore: 1, image: '../assets/images/gekko.png' },
//     { name: 'Fade', minScore: 1, image: '../assets/images/fade.png' }
//   ]
// };

// const loadQuestion = index => {
//   const questionData = questions[index];
//   questionElement.textContent = questionData.question;
//   optionsContainer.innerHTML = '';

//   questionData.options.forEach((option, i) => {
//     const optionContainer = document.createElement('div');
//     const inputElement = document.createElement('input');
//     inputElement.type = 'radio';
//     inputElement.id = `q${index}_option${i}`;
//     inputElement.name = `q${index}`;

//     const labelElement = document.createElement('label');
//     labelElement.setAttribute('for', `q${index}_option${i}`);
//     labelElement.textContent = option.text;

//     optionContainer.append(inputElement, labelElement, optionContainer);

//     const updateScoreAndMoveToNextQuestion = () => {
//       UpdateScore(option.value);
//       moveToNextQuestion();
//     };

//     inputElement.addEventListener('change', updateScoreAndMoveToNextQuestion);
//   });
// };

// const UpdateScore = role => {
//   const roles = role.split(', ');
//   roles.forEach(rol => {
//     score[rol]++;
//   });
// };

// const moveToNextQuestion = () => {
//   currentQuestionIndex++;
//   if (currentQuestionIndex < questions.length) {
//     loadQuestion(currentQuestionIndex);
//   } else {
//     showResult();
//   }
// };

// const showResult = () => {
//   quizContainer.classList.add('hidden');
//   resultContainer.classList.remove('hidden');

//   let topRole = null;
//   let highestScore = -1;

//   for (const role in score) {
//     if (score[role] > highestScore) {
//       highestScore = score[role];
//       topRole = role;
//     }
//   }
//   const selectedAgent = agents[topRole].find(
//     agent => score[topRole] >= agent.minScore
//   );

//   const roleTextMap = {
//     duelist:
//       'Eres un Duelista, te gusta la acción rápida y estar en el frente del combate.',
//     sentinel:
//       'Eres un Centinela, te especializas en apoyar y proteger a tu equipo desde la retaguardia.',
//     controller:
//       'Eres un Controlador, te enfocas en dominar el mapa y controlar el campo de batalla.',
//     initiator:
//       'Eres un Iniciador, preparas el camino para que tu equipo entre en acción.'
//   };

//   textResultElement.textContent = `Rol: ${topRole} - Agente: ${selectedAgent.name}. ${roleTextMap[topRole]}`;
//   roleImage.src = `../assets/images/${topRole}.svg`;
//   agentImage.src = selectedAgent.image;
// };

// loadQuestion(currentQuestionIndex);

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const resultContainer = document.getElementById('result');
const textResultElement = document.getElementById('text-result');
const roleImage = document.getElementById('role-image');
const agentImage = document.getElementById('agent-image');

const questions = [
  {
    question: 'Estilo de Juego Preferido en FPS:',
    options: [
      { text: 'Agresivo, liderando el ataque', value: 'duelist' },
      { text: 'Defensivo, protegiendo a mis compañeros', value: 'sentinel' },
      { text: 'Estratégico, controlando el mapa', value: 'controller' },
      { text: 'Apoyo, asegurando el éxito del equipo', value: 'initiator' }
    ]
  },
  {
    question: 'Habilidad Más Importante',
    options: [
      { text: 'Infligir daño masivo', value: 'duelist' },
      { text: 'Curar y revivir a tus compañeros', value: 'sentinel' },
      {
        text: 'Colocar trampas y controlar áreas',
        value: 'controller, sentinel'
      },
      { text: 'Recoger y comunicar información', value: 'initiator' }
    ]
  },
  {
    question: '¿Cómo Prefieres Enfrentarte a los Enemigos?',
    options: [
      { text: 'Directamente y de cerca', value: 'duelist' },
      { text: 'Desde una distancia segura', value: 'sentinel' },
      {
        text: 'Utilizando emboscadas y trampas',
        value: 'controller, sentinel'
      },
      {
        text: 'Observando sus movimientos y atacando cuando están distraídos',
        value: 'initiator'
      }
    ]
  },
  {
    question: 'Tipo de Armas Preferidas',
    options: [
      { text: 'Escopetas y subfusiles', value: 'duelist' },
      {
        text: 'Rifles de francotirador y armas a larga distancia',
        value: 'sentinel'
      },
      {
        text: 'Fusiles de asalto y armas versátiles',
        value: 'controller, initiator'
      },
      { text: 'Pistolas y armas secundarias', value: 'duelist' }
    ]
  },
  {
    question: 'Ser la Primera Persona en Entrar en Combate',
    options: [
      { text: 'Me encanta, soy el primero en entrar', value: 'duelist' },
      {
        text: 'Prefiero seguir a otros y apoyar desde atrás',
        value: 'sentinel'
      },
      {
        text: 'Entro solo si tengo un plan claro',
        value: 'controller, initiator'
      },
      {
        text: 'Prefiero observar y analizar antes de entrar',
        value: 'initiator'
      }
    ]
  },
  {
    question: 'Motivación en una Partida de Equipo',
    options: [
      { text: 'Obtener muchas eliminaciones', value: 'duelist' },
      { text: 'Asegurarte de que tu equipo sobreviva', value: 'sentinel' },
      { text: 'Desbaratar las estrategias del enemigo', value: 'controller' },
      {
        text: 'Proporcionar información crucial a tu equipo',
        value: 'initiator'
      }
    ]
  },
  {
    question: 'Habilidades Favoritas en un Personaje',
    options: [
      { text: 'Habilidades ofensivas y destructivas', value: 'duelist' },
      { text: 'Habilidades de curación y defensa', value: 'sentinel' },
      {
        text: 'Habilidades de control de zonas y trampas',
        value: 'controller, sentinel'
      },
      { text: 'Habilidades de detección y sigilo', value: 'initiator' }
    ]
  },
  {
    question: 'Acciones Ante un Compañero en Problemas',
    options: [
      { text: 'Cargar contra el enemigo para ayudar', value: 'duelist' },
      {
        text: 'Usar una habilidad para proteger o curar a tu compañero',
        value: 'sentinel'
      },
      {
        text: 'Colocar una trampa para desviar la atención del enemigo',
        value: 'controller, sentinel'
      },
      {
        text: 'Informar a tu equipo y buscar una forma de flanquear al enemigo',
        value: 'initiator'
      }
    ]
  },
  {
    question: 'Preferencia entre Defensa o Ataque',
    options: [
      { text: 'Ataque, me gusta la acción', value: 'duelist' },
      {
        text: 'Defensa, me gusta proteger y mantener posiciones',
        value: 'sentinel'
      },
      { text: 'Depende de la situación, puedo adaptarme', value: 'controller' },
      {
        text: 'Me gusta observar y adaptarme según sea necesario',
        value: 'initiator'
      }
    ]
  },
  {
    question: 'Manejo de la Presión en Partidas Competitivas',
    options: [
      {
        text: 'Mantengo la calma y me concentro en eliminar enemigos',
        value: 'duelist'
      },
      {
        text: 'Me enfoco en apoyar a mi equipo y mantenerlos con vida',
        value: 'sentinel'
      },
      {
        text: 'Uso mi ingenio para crear oportunidades tácticas',
        value: 'controller'
      },
      {
        text: 'Analizo la situación y proporciono la mejor información posible',
        value: 'initiator'
      }
    ]
  }
];

let currentQuestionIndex = 0;
let score = {
  duelist: 0,
  sentinel: 0,
  controller: 0,
  initiator: 0
};

const agents = {
  duelist: [
    { name: 'Jett', minScore: 5, image: '../assets/images/jett.png' },
    { name: 'Phoenix', minScore: 3, image: '../assets/images/phoenix.png' },
    { name: 'Reyna', minScore: 3, image: '../assets/images/reyna.png' },
    { name: 'Raze', minScore: 2, image: '../assets/images/raze.png' },
    { name: 'Neon', minScore: 1, image: '../assets/images/neon.png' },
    { name: 'Yoru', minScore: 1, image: '../assets/images/yoru.png' }
  ],
  sentinel: [
    { name: 'Sage', minScore: 5, image: '../assets/images/sage.png' },
    { name: 'Cypher', minScore: 4, image: '../assets/images/cypher.png' },
    { name: 'Killjoy', minScore: 3, image: '../assets/images/killjoy.png' },
    { name: 'Chamber', minScore: 2, image: '../assets/images/chamber.png' },
    { name: 'Deadlock', minScore: 1, image: '../assets/images/deadlock.png' }
  ],
  controller: [
    { name: 'Brimstone', minScore: 5, image: '../assets/images/brimstone.png' },
    { name: 'Omen', minScore: 4, image: '../assets/images/omen.png' },
    { name: 'Viper', minScore: 3, image: '../assets/images/viper.png' },
    { name: 'Astra', minScore: 2, image: '../assets/images/astra.png' },
    { name: 'Harbor', minScore: 1, image: '../assets/images/harbor.png' }
  ],
  initiator: [
    { name: 'Sova', minScore: 5, image: '../assets/images/sova.png' },
    { name: 'Breach', minScore: 4, image: '../assets/images/breach.png' },
    { name: 'Skye', minScore: 3, image: '../assets/images/skye.png' },
    { name: 'KAY/O', minScore: 2, image: '../assets/images/kayo.png' },
    { name: 'Gekko', minScore: 1, image: '../assets/images/gekko.png' },
    { name: 'Fade', minScore: 1, image: '../assets/images/fade.png' }
  ]
};

const loadQuestion = index => {
  const questionData = questions[index];
  questionElement.textContent = questionData.question;
  optionsContainer.innerHTML = '';

  questionData.options.forEach((option, i) => {
    const optionContainer = document.createElement('div');
    const inputElement = document.createElement('input');
    inputElement.type = 'radio';
    inputElement.id = `q${index}_option${i}`;
    inputElement.name = `q${index}`;
    inputElement.value = option.value;

    const labelElement = document.createElement('label');
    labelElement.setAttribute('for', `q${index}_option${i}`);
    labelElement.textContent = option.text;

    optionContainer.append(inputElement, labelElement);
    optionsContainer.append(optionContainer);

    inputElement.addEventListener('change', () => {
      UpdateScore(option.value);
      moveToNextQuestion();
    });
  });
};

const UpdateScore = role => {
  const roles = role.split(', ');
  roles.forEach(rol => {
    score[rol]++;
  });
};

const moveToNextQuestion = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion(currentQuestionIndex);
  } else {
    showResult();
  }
};

const showResult = () => {
  quizContainer.classList.add('hidden');
  resultContainer.classList.remove('hidden');

  let topRole = null;
  let highestScore = -1;

  for (const role in score) {
    if (score[role] > highestScore) {
      highestScore = score[role];
      topRole = role;
    }
  }

  const selectedAgent = agents[topRole].find(
    agent => score[topRole] >= agent.minScore
  );

  const roleTextMap = {
    duelist:
      'Eres un Duelista, te gusta la acción rápida y estar en el frente del combate.',
    sentinel:
      'Eres un Centinela, te especializas en apoyar y proteger a tu equipo desde la retaguardia.',
    controller:
      'Eres un Controlador, te enfocas en dominar el mapa y controlar el campo de batalla.',
    initiator:
      'Eres un Iniciador, preparas el camino para que tu equipo entre en acción.'
  };

  textResultElement.textContent = `Rol: ${topRole} - Agente: ${selectedAgent.name}. ${roleTextMap[topRole]}`;
  roleImage.src = `../assets/images/${topRole}.svg`;
  agentImage.src = selectedAgent.image;
};

// Cargar la primera pregunta al iniciar
loadQuestion(currentQuestionIndex);
