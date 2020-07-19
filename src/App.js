import React from 'react';
import './App.css';
import './components/QuizApp'
import QuizApp from './components/QuizApp';

function App() {
  return (
    <div className="App">
      <QuizApp questionCount={5}/>
    </div>
  );
}

export default App;
