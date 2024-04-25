import React from 'react';
import NoteBook from './Components/NoteBook';
import { NotebookProvider } from './Context/NotebookContext';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>My NoteBook</h1>
      <NotebookProvider>
        <NoteBook />
      </NotebookProvider>
    </div>
  );
}

export default App;
