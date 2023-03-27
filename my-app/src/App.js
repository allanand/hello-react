import logo from './logo.svg';
import './App.css';


const work = {
  title: 'My Saturday',
  author: 'Andrew Allan',
  published: 'March 27, 2023',
  image: logo,
  width: '264',
  height: '378'
};

function Intro() {
  return (
  <div>
    <img
        className="stageView"
        src="https://cdn.sanity.io/images/mnmuyuld/production/381aee9ec50237768a4c956af3f35935f5000207-1024x683.jpg?w=840&q=90&fit=max&auto=format"
        alt={work.title + ' cover'}
        style={{
          width: work.width,
          height: work.height
        }}
      />
      <h2>{work.title} ({work.published})</h2>  
      <p>{work.author}</p>    
      <p>Last Satruday I attended a charity event called Gamers for Giving at EMU. There was a Smash Brother Ultimate gaming tournamant happening there called Phoenix Down, and I had a lot of friends, including myself, that wanted to go. It was a lot of fun and I competed very well all things considered.</p>
  </div>
  )
}

const experience = [
  { id: 1, title: 'Overall Fun', theme: 'architecture', isAvailable: true },
  { id: 2, title: 'Smell', theme: 'design', isAvailable: true },
  { id: 3, title: 'Air Conditioning', theme: 'architecture', isAvailable: true },
  { id: 4, title: 'Wifi Connection', theme: 'design', isAvailable: true },
  { id: 5, title: 'Cost', theme: 'architecture', isAvailable: false },
  { id: 6, title: 'Food Options by Walking', theme: 'design', isAvailable: false },
];

function MyExperience() {
  const listExperience = experience.map(experience =>
    <li
      key={experience.id}
      style={{
        color: experience.isAvailable ? 'green' : 'red'
      }}
    >
      {experience.title}
    </li>
  );
  return (
    <ul>{listExperience}</ul>
  )
}



const magazines = [
  { id: 1, title: 'Architectural Digest', theme: 'architecture', isAvailable: true },
  { id: 2, title: 'Dwell', theme: 'architecture', isAvailable: true },
  { id: 3, title: 'Communication Arts', theme: 'design', isAvailable: false },
];

function ZineRack() {
  const listZines = magazines.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'green' : 'red'
      }}
    >
      {zine.title}
    </li>
  );
  return (
    <ul>{listZines}</ul>
  )
}

const book = {
  title: 'A Farewell to Arms',
  author: 'Earnest Hemingway',
  published: '1929',
  image: logo,
  width: '264',
  height: '378'
};

function Bookshelf() {
  return (
    <div>
      {/* Components can't return multiple JSX tags unless they are wrapped in a parent element */}
      {/* This is a JSX comment */}
      <h2>{book.title} ({book.published})</h2>
      <p>{book.author}</p>
      {/* This a conditional that checks if an image exists before displaying it */}
      {book.image &&
      <img
        className="bookCover"
        src={book.image}
        alt={book.title + ' cover'}
        style={{
          width: book.width,
          height: book.height
        }}
      />
      }
    </div>
  );
}

function MagicButton() {
  return(
    <div>
      <h3>This is a magic button</h3>
      <button>Magic</button>
    </div>

  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Intro  />
        <MyExperience />
      </header>
    </div>
  );
}

export default App;
