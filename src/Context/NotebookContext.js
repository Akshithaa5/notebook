// NotebookContext.js
import React, { createContext, useContext, useState } from 'react';

const NotebookContext = createContext();

export const useNotebook = () => useContext(NotebookContext);

export const NotebookProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const addNote = (title, description) => {
    setNotes([...notes, { title, description }]);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const searchNotes = (query) => {
    return notes.filter(note => note.title.toLowerCase().includes(query.toLowerCase()));
  };

  return (
    <NotebookContext.Provider value={{ notes, addNote, deleteNote, searchNotes }}>
      {children}
    </NotebookContext.Provider>
  );
};
