import React, { useState } from 'react';
import { useNotebook } from '../Context/NotebookContext';
import './NoteBook.css';

const NoteBook = () => {
  const { notes, deleteNote } = useNotebook();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <label htmlFor="search">Search Notes:</label>
      <input
        type="text"
        id="search"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search notes..."
      />

      <div>
        <label>Total Notes: {notes.length}</label>
        <label>Showing: {filteredNotes.length}</label>
      </div>

      {filteredNotes.map((note, index) => (
        <div key={index}>
          <h3>{note.title}</h3>
          <p>{note.description}</p>
          <button onClick={() => deleteNote(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default NoteBook;
