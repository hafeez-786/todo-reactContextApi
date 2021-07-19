import React from 'react';
import './styles/App.css';
import TodoProvider from './context/TodoProvider';
import Todos from './components/Todos';

function App() {

  return (
    <div className="App">
      <TodoProvider>
        <Todos />
      </TodoProvider>
    </div>
  );
}

export default App;
