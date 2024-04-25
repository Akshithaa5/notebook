import React, { useState } from 'react';
import Notebook from './Components/NoteBook';
import AddNoteModal from './Components/AddNoteModal';
import { NotebookProvider } from './Context/NotebookContext';
import './App.css'; // Import the CSS file for styling

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <NotebookProvider>
      <div className="container">
        <h1>My Notebook</h1>
        <button onClick={handleToggleModal} className="add-button">Add New Note</button>
        <Notebook />
        {isModalOpen && <AddNoteModal onClose={handleToggleModal} />}
      </div>
    </NotebookProvider>
  );
};

export default App;
