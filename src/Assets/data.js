const data = [
  {
    id: 1,    
    name: 'Bragging Rights',
    image: {
      source: './BraggingRights.png',
      alt: 'screenshot of Bragging Rights app on a full size monitor',
      class: 'bigScreen'
    },
    url: 'https://brag.vercel.app/',
    description: 'An app to help friends keep track of the wagers they make with each other. The site lets registered users request other users as friends. Once a friendship is accepted, a user can create and send a wager to their friend. The friend is free to accept or deny the wager, and either person can indicate who has won.',
    codeURL: 'https://github.com/ajlanza/Bragging-Rights',
    developedWith:  'HTML, CSS, JavaScript, React, Node, Express, and PostgresQL'

  },
  {
    id: 2,
    name: 'Phone Triage',
    image: {
      source: './PhoneTriage.png',
      alt: 'screenshot of Phone Triage app on a full size monitor',
      class: 'bigScreen'
    },
    url: 'https://phone-triage.vercel.app/',
    description: 'An app designed for users with malfunctioning phones. The site allows users to browse through previous problems and solutions. If they are unable to find a similar problem to theirs, they can log in and post their particular problem. A user can also request that a service technician meet them wherever they are to help them out.',
    codeURL: 'https://github.com/ajlanza/phone-triage',
    developedWith: 'HTML, CSS, JavaScript, React, Node, Express, and PostgresQL'
  }, 
  {
    id: 3,
    name: 'Get Out',
    image: {
      source: './GetOut.png',
      alt:'screenshot of get out app on a full size monitor',
      class:'bigGet'
    },
    url: 'https://get-out.vercel.app/',
    description: 'An app that will show the user where an event is located. The user is asked for a city and receives a list of events for that city. When the user clicks on an event, the app will show where the venue is on the map, display a background image of the event, and name the venue where the event is being held.',
    codeURL: 'https://github.com/ajlanza/getout',
    developedWith: 'HTML, CSS, JavaScript, and jQuery'
  },   
  {
    id: 4,
    name: 'Glass Quiz',
    image: {
      source: './GlassQuiz.png',
      alt: 'screenshot of quiz app on a full size monitor',
      class: 'bigScreen'
    },
    url: 'https://ajlanza.github.io/quiz/',
    description: 'An app that quizzes the user one question at a time. Multiple choice answers are given for each question. The app gives feedback about the correct answer once an answer is submitted. The current question number and the user\'s score is displayed to the user at all times. When the user gets a question correct, the background changes to a picture of stained glass. If the user gets a question wrong, the background is changed to an image of broken glass. At the end of the quiz, the user is given the option to start the quiz again.',
    codeURL: 'https://github.com/ajlanza/quiz',
    developedWith: 'HTML, CSS, and jQuery'
  }, 
]

export default data;