import React, { createContext, useContext, useState } from 'react';

// Create the context
const NotebookContext = createContext();

// Create the provider
export const NotebookProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const addNote = (title, desc) => {
    setNotes([...notes, { title, desc }]);
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <NotebookContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NotebookContext.Provider>
  );
};

// Custom hook for using the context
export const useNotebook = () => {
  return useContext(NotebookContext);
};
