const works = [
  {
    id: 'abc123',
    title: 'urList',
    logo: 'https://camo.githubusercontent.com/a59805baa04af436cdfa9b1704791c745f5f175382d0ffffc4224c17670c33b4/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f77593578616673687a704e50734f5a6363666c374e6454636558746b2d4c33626a69424558305078764c7a6a6553484632546d31793355645a534659794e7744497a5f685a6a594e436a785f7345307176456431436f3679367535394677324241587a722d7570504a6b777745543341354e6c575056483269316264706d54756573656f7838782d69513d7732343030',
    quote: 'Store, Secure, Seamlessly',
    brief:
      'urList, stands for urgent list, is a self- project that was intended to simplify my work.As a test analyst, I had to memorize a lot of accounts, commandlines, notes from seniors, meeting, etc.So, I created this to make it easier to see / retrieve my data.',
    techStack: [
      {
        type: 'frontend',
        items: [
          {
            name: 'React',
            link: 'https://reactjs.org/',
          },
          {
            name: 'Styled-Components',
            link: 'https://styled-components.com/',
          },
          {
            name: 'React-Redux',
            link: 'https://react-redux.js.org/',
          },
          {
            name: 'Axios',
            link: 'https://axios-http.com/docs/intro',
          },
        ],
      },
      {
        type: 'backend',
        items: [
          {
            name: 'ExpressJS',
            link: 'https://expressjs.com/',
          },
          {
            name: 'crypto-js',
            link: 'https://www.npmjs.com/package/crypto-js',
          },
        ],
      },
      {
        type: 'database',
        items: [
          {
            name: 'Mongoose',
            link: 'https://mongoosejs.com/',
          },
          {
            name: 'MongoDB',
            link: 'https://www.mongodb.com/',
          },
        ],
      },
      {
        type: 'tools',
        items: [
          {
            name: 'Git',
            link: 'https://git-scm.com/',
          },
          {
            name: 'Neovim',
            link: 'https://neovim.io/',
          },
          {
            name: 'Nodemon',
            link: 'https://www.npmjs.com/package/nodemon',
          },
          {
            name: 'Morgan',
            link: 'https://www.npmjs.com/package/morgan',
          },
          {
            name: 'Concurrently',
            link: 'https://www.npmjs.com/package/concurrently',
          },
        ],
      },
    ],
    demo: [
      'https://github.com/SedanaYoga/urList/raw/main/docs/spa-ui.png',
      'https://github.com/SedanaYoga/urList/raw/main/docs/crud-list.png',
    ],
    learnt: [
      {
        title: 'Designing Lists Structure',
        text: "I learnt a lot (from mistakes) about how to create the sustainable structure because I have 3 different lists on this project, Account list, Command Line list, and Note list. Each has different UI and different structure. I'm not sure if this is how developer design the model but it worked in my project at least.",
      },
      {
        title: 'Express JS',
        text: 'This is my first time using Express JS replacing core module of http-server from nodejs. At first, I struggle a lot about middlewares and how it works, but everything seems smooth when I get used to it. Plus I used third party library here for handling asynchronous function. I also learnt about Software Development Architecture in this project since I separate frontend and backend folder so it seems tend to be a macro microservice app :D',
      },
      {
        title: 'Styled Components',
        text: 'I learn styled component from my udemy course and try to implement it to this project. The flow is so easy because the css is on the js file, since it basically a template literal of javascript. The integration with React State is the best.',
      },
    ],
    features: [
      'CRUD Functionality of three lists.',
      'Encrypted password when it logged to Database',
      'Database is using MongoDB and store it in cloud.',
      'Markdown Editor for Note Editing',
      'Search box for easy finding',
      'Copy-Paste on click on the Password and Command Line fields',
      'Fresh UI to keep your chin up facing your work :D',
    ],
    spaceForImprovement: [
      'Authentication and Session implementation',
      'App for everyone and connect user data using Firebase',
      'Group feature and allow them to have realtime chatting',
      'Frequently used section feature',
      'Reordering list on the same list section',
    ],
    relatedLinks: [
      {
        name: 'GitHub',
        link: 'https://github.com/SedanaYoga/urList',
      },
    ],
  },
]
export default works
