import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Props {
  name: string;
  enthusiasmLevel?: number;
}

const getExclamationMarks = (level: number) => Array(level + 1).join('!')

const App: React.FC<Props> = ({name, enthusiasmLevel}) => {
  const [enthusiasm, setEnthusiasm] = React.useState(enthusiasmLevel || 1)
  const [username, setUserame] = React.useState(name)

  const increment = () => {
    setEnthusiasm(enthusiasm + 1)
  }

  const decrement = () => {
    setEnthusiasm(enthusiasm - 1 < 1 ? 1 : enthusiasm - 1)
  }

  return (
    <div className="App">
      <div className="greetings">
        Hello {username + getExclamationMarks(enthusiasm)}
      </div> <br/>
      <button onClick={increment}>
        😊
      </button> &nbsp;
      <button onClick={decrement}>
        😥
      </button> <br/> <br/>
      <input
       type="text" 
       placeholder="change name" 
       onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserame(e.target.value || name)}
       style={{
        paddingLeft: 5
       }} 
      />
    </div>
  );
}

export default App;
