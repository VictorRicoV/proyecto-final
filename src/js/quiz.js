import '../scss/styles.scss';

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const resultContainer = document.getElementById('result');
const textResultElement = document.getElementById('text-result');
const textResultTopElement = document.getElementById('text-result-top');
const roleImage = document.getElementById('role-image');
const agentImage = document.getElementById('agent-image');

const questions = [
  {
    question: '1- Estilo de Juego Preferido en FPS:',
    options: [
      { text: 'A) Agresivo, liderando el ataque', value: 'duelist' },
      { text: 'B) Defensivo, protegiendo a mis compañeros', value: 'sentinel' },
      { text: 'C) Estratégico, controlando el mapa', value: 'controller' },
      { text: 'D) Apoyo, asegurando el éxito del equipo', value: 'initiator' }
    ]
  },
  {
    question: '2- Habilidad Más Importante',
    options: [
      { text: 'A) Infligir daño masivo', value: 'duelist' },
      { text: 'B) Curar y revivir a tus compañeros', value: 'sentinel' },
      {
        text: 'C) Colocar trampas y controlar áreas',
        value: 'controller, sentinel'
      },
      { text: 'D) Recoger y comunicar información', value: 'initiator' }
    ]
  },
  {
    question: '3- ¿Cómo Prefieres Enfrentarte a los Enemigos?',
    options: [
      { text: 'A) Directamente y de cerca', value: 'duelist' },
      { text: 'B) Desde una distancia segura', value: 'sentinel' },
      {
        text: 'C) Utilizando emboscadas y trampas',
        value: 'controller, sentinel'
      },
      {
        text: 'D) Observando sus movimientos y atacando cuando están distraídos',
        value: 'initiator'
      }
    ]
  },
  {
    question: '4- Tipo de Armas Preferidas',
    options: [
      { text: 'A) Escopetas y subfusiles', value: 'duelist' },
      {
        text: 'B) Rifles de francotirador y armas a larga distancia',
        value: 'sentinel'
      },
      {
        text: 'C)Fusiles de asalto y armas versátiles',
        value: 'controller, initiator'
      },
      { text: 'D) Pistolas y armas secundarias', value: 'duelist' }
    ]
  },
  {
    question: '5- Ser la Primera Persona en Entrar en Combate',
    options: [
      { text: 'A) Me encanta, soy el primero en entrar', value: 'duelist' },
      {
        text: 'B) Prefiero seguir a otros y apoyar desde atrás',
        value: 'sentinel'
      },
      {
        text: 'C) Entro solo si tengo un plan claro',
        value: 'controller, initiator'
      },
      {
        text: 'D) Prefiero observar y analizar antes de entrar',
        value: 'initiator'
      }
    ]
  },
  {
    question: '6- Motivación en una Partida de Equipo',
    options: [
      { text: 'A) Obtener muchas eliminaciones', value: 'duelist' },
      { text: 'B) Asegurarte de que tu equipo sobreviva', value: 'sentinel' },
      {
        text: 'C) Desbaratar las estrategias del enemigo',
        value: 'controller'
      },
      {
        text: 'D) Proporcionar información crucial a tu equipo',
        value: 'initiator'
      }
    ]
  },
  {
    question: '7- Habilidades Favoritas en un Personaje',
    options: [
      { text: 'A) Habilidades ofensivas y destructivas', value: 'duelist' },
      { text: 'B) Habilidades de curación y defensa', value: 'sentinel' },
      {
        text: 'C) Habilidades de control de zonas y trampas',
        value: 'controller, sentinel'
      },
      { text: 'D) Habilidades de detección y sigilo', value: 'initiator' }
    ]
  },
  {
    question: '8- Acciones Ante un Compañero en Problemas',
    options: [
      { text: 'A)Cargar contra el enemigo para ayudar', value: 'duelist' },
      {
        text: 'B) Usar una habilidad para proteger o curar a tu compañero',
        value: 'sentinel'
      },
      {
        text: 'C) Colocar una trampa para desviar la atención del enemigo',
        value: 'controller, sentinel'
      },
      {
        text: 'D) Informar a tu equipo y buscar una forma de flanquear al enemigo',
        value: 'initiator'
      }
    ]
  },
  {
    question: '9- Preferencia entre Defensa o Ataque',
    options: [
      { text: 'A) Ataque, me gusta la acción', value: 'duelist' },
      {
        text: 'B) Defensa, me gusta proteger y mantener posiciones',
        value: 'sentinel'
      },
      {
        text: 'C) Depende de la situación, puedo adaptarme',
        value: 'controller'
      },
      {
        text: 'D) Me gusta observar y adaptarme según sea necesario',
        value: 'initiator'
      }
    ]
  },
  {
    question: '10- Manejo de la Presión en Partidas Competitivas',
    options: [
      {
        text: 'A) Mantengo la calma y me concentro en eliminar enemigos',
        value: 'duelist'
      },
      {
        text: 'B) Me enfoco en apoyar a mi equipo y mantenerlos con vida',
        value: 'sentinel'
      },
      {
        text: 'C) Uso mi ingenio para crear oportunidades tácticas',
        value: 'controller'
      },
      {
        text: 'D) Analizo la situación y proporciono la mejor información posible',
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
    { name: 'Jett', minScore: 5, image: '/../assets/images/jett.png' },
    { name: 'Phoenix', minScore: 3, image: '/../assets/images/phoenix.png' },
    { name: 'Reyna', minScore: 3, image: '/../assets/images/reyna.png' },
    { name: 'Raze', minScore: 2, image: '/../assets/images/raze.png' },
    { name: 'Neon', minScore: 1, image: '/../assets/images/neon.png' },
    { name: 'Yoru', minScore: 1, image: '/../assets/images/yoru.png' }
  ],
  sentinel: [
    { name: 'Sage', minScore: 5, image: '/../assets/images/sage.png' },
    { name: 'Cypher', minScore: 4, image: '/../assets/images/cypher.png' },
    { name: 'Killjoy', minScore: 3, image: '/../assets/images/killjoy.png' },
    { name: 'Chamber', minScore: 2, image: '/../assets/images/chamber.png' },
    { name: 'Deadlock', minScore: 1, image: '/../assets/images/deadlock.png' }
  ],
  controller: [
    {
      name: 'Brimstone',
      minScore: 5,
      image: '/../assets/images/brimstone.png'
    },
    { name: 'Omen', minScore: 4, image: '/../assets/images/omen.png' },
    { name: 'Viper', minScore: 3, image: '/../assets/images/viper.png' },
    { name: 'Astra', minScore: 2, image: '/../assets/images/astra.png' },
    { name: 'Harbor', minScore: 1, image: '/../assets/images/harbor.png' }
  ],
  initiator: [
    { name: 'Sova', minScore: 5, image: '/../assets/images/sova.png' },
    { name: 'Breach', minScore: 4, image: '/../assets/images/breach.png' },
    { name: 'Skye', minScore: 3, image: '/../assets/images/skye.png' },
    { name: 'KAY/O', minScore: 2, image: '/../assets/images/kayo.png' },
    { name: 'Gekko', minScore: 1, image: '/../assets/images/gekko.png' },
    { name: 'Fade', minScore: 1, image: '/../assets/images/fade.png' }
  ]
};

const loadQuestion = index => {
  const questionData = questions[index];
  questionElement.textContent = questionData.question;
  optionsContainer.innerHTML = '';

  questionData.options.forEach((option, i) => {
    const diamondImage = document.createElement('img');
    diamondImage.src = '/../assets/images/diamond.svg';
    diamondImage.classList.add('diamond-img');
    const optionContainer = document.createElement('div');
    optionContainer.classList.add('quiz-option');
    optionContainer.append(diamondImage);

    const inputElement = document.createElement('input');
    inputElement.type = 'radio';
    inputElement.id = `q${index}_option${i}`;
    inputElement.name = `q${index}`;
    inputElement.value = option.value;

    const labelElement = document.createElement('label');
    labelElement.setAttribute('for', `q${index}_option${i}`);
    labelElement.textContent = option.text;
    labelElement.classList.add('quiz-option-label');

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

  const possibleAgents = agents[topRole].filter(
    agent => score[topRole] >= agent.minScore
  );

  const selectedAgent =
    possibleAgents[Math.floor(Math.random() * possibleAgents.length)];

  const rolText = {
    duelist:
      'Eres un Duelista, te encanta estar en el frente del combate, abriendo el camino para tu equipo con eliminaciones rápidas y decisivas. Tu audacia y agilidad te permiten enfrentarte cara a cara con el enemigo, rompiendo sus defensas y creando oportunidades de ataque. Siempre listo para la acción, disfrutas liderando la carga y siendo el primero en el fragor de la batalla.',
    sentinel:
      'Eres un Centinela, el protector del equipo. Te especializas en mantener la seguridad y el control, utilizando tus habilidades para defender áreas clave y apoyar a tus compañeros. Tu enfoque estratégico te permite prever los movimientos enemigos y asegurar la estabilidad del equipo, curando, reviviendo o estableciendo defensas que detienen al enemigo en seco.',
    controller:
      'Eres un Controlador, maestro del ritmo del juego. Te centras en dominar el campo de batalla, bloqueando la visión enemiga y guiando a tu equipo con tácticas precisas. Tus habilidades alteran el flujo de la partida, desorientando al enemigo y forzándolo a tomar decisiones apresuradas. Como estratega, controlas la situación para maximizar la ventaja de tu equipo.',
    initiator:
      'Eres un Iniciador, el que allana el camino para tu equipo. Tu misión es desestabilizar al enemigo y proporcionar la información necesaria para que tus compañeros actúen con ventaja. Con tus habilidades, creas caos entre las filas enemigas, abriendo oportunidades para un asalto coordinado. Eres el puente entre la estrategia y la acción, asegurando que tu equipo siempre tenga la iniciativa.'
  };

  textResultTopElement.textContent = `Rol: ${topRole} - Agente: ${selectedAgent.name}`;
  textResultElement.textContent = rolText[topRole];
  roleImage.src = `/../assets/images/${topRole}.svg`;
  agentImage.src = selectedAgent.image;
};

loadQuestion(currentQuestionIndex);
