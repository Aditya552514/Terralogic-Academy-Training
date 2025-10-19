import logo from './logo.svg';
import './App.css';
import DemoComponent from './DemoComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

        <p>Hello world</p>

        <marquee direction="left" scrollamount="12" style={{ width: "100%", color: "Yellow", fontSize: "1.6rem" }}>
          React | JavaScript | Node.js | MongoDB | Express.js | HTML | CSS
        </marquee>

        <div className = "image-container">
          <div className="image-wrapper">
            <img src = "https://tse4.mm.bing.net/th/id/OIP.XKR7T5dAKcb7pQO1e4M6pgHaFc?pid=Api&P=0&h=180" alt="Image 1 " className="zoom-image"/>
          </div>

          <div className="image-wrapper">
            <img src = "https://tse4.mm.bing.net/th/id/OIP.TwcAbmSDfKpKp2u_S_tpEAHaE8?pid=Api&P=0&h=180" alt="Image 2 " className="zoom-image"/>
          </div>

        </div>

        

        

        <DemoComponent />
        

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
