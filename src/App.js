import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import { ContextFun } from './components/context/context';

function App() {
  return (
    <div>
      <ContextFun>
        <Main />

      </ContextFun>
    </div>
  );
}

export default App;
