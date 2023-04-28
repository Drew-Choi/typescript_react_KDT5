import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Input from './components/Input';
import ChangeColor from './components/ChangeColor';
import ParentProps from './components/ParentProps';
import Todo from './components/Todo';
import Header from './components/Header';
import Section from './components/Section';

function App() {
  return (
    <div className="App">
     {/* <Counter />
     <Input /> */}
     {/* <ChangeColor />

     <ParentProps /> */}
     {/* <Todo /> */}

     <Header />
     <Section color='blue'/>
    </div>
  );
}

export default App;
