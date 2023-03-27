import logo from './logo.svg';
import './App.css';

const magazines = [
  { id: 1, title: 'Architectural Digest', theme: 'architecture', isAvailable: true },
  { id: 2, title: 'Dwell', theme: 'architecture', isAvailable: true },
  { id: 3, title: 'Communication Arts', theme: 'design', isAvailable: false },
];

function Intro() {
  return (
  <div>
    <h3>My Saturday</h3>
    <p>Satruday I attended a charity event called Gamers for Giving at EMU. There was a Smash Brother Ultimate tournamant happening there called Phoenix Down, and I had a lot of friends, including myself,  wanted to go. It was a lot of fun and I competed very well all things considered.</p>
    <img
        className="stageView"
        src="https://cdn.sanity.io/images/mnmuyuld/production/381aee9ec50237768a4c956af3f35935f5000207-1024x683.jpg?w=840&q=90&fit=max&auto=format"
        alt={book.title + ' cover'}
        style={{
          width: book.width,
          height: book.height
        }}
      />
  </div>
  )
}



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
        <ZineRack />
        <Bookshelf />
      </header>
    </div>
  );
}

export default App;
