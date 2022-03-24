import React from 'react';
import './App.css';
import Header from './components/header';
import List from './pages/list';

function App() {
  return (
    <div className='container pt-3'>
      <Header />
      <List />
    </div>
  );
}

export default App;
