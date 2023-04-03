import logo from '../../logo.svg';
import Counter from '../Counter/Counter';
import List1 from '../Lists/Lists';
import NameList from '../NameList/NameList';
import Propagation from '../propagation/propagation';
import './App.css';





function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello, world</h1> {/* Завдання 4 */}

        <NameList /> {/* Завдання 2 */}
        <Counter /> {/* Завдання 3 */}


        <List1 /> {/* Завдання 5 */}

        <Propagation /> {/* Завдання 6 */}

      </header>
    </div>
  );
}

export default App;
