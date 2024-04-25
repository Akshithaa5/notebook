import React, { useState } from 'react';
import { useNotebook } from '../Context/NotebookContext';

const NoteBook = () => {
  const { notes, addNote, deleteNote } = useNotebook();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleAddNote = () => {
    addNote(title, desc);
    setTitle('');
    setDesc('');
  };

  return (
    <div>
      <label htmlFor="search">Search Notes: </label>
      <input type="text" id="search" />

      <div>
        <label htmlFor="total">Total Notes: {notes.length}</label>
        <label htmlFor="showing">Showing: {notes.length}</label>
      </div>

      <button onClick={handleAddNote}>Add New Note</button>

      {notes.map((note, index) => (
        <div key={index}>
          <h3>{note.title}</h3>
          <p>{note.desc}</p>
          <button onClick={() => deleteNote(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteBook;
