


import React, { useState } from 'react';
import { useNotebook } from '../Context/NotebookContext';

const AddNoteModal = ({ isOpen, onClose }) => {
  const { addNote } = useNotebook();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddNote = () => {
    addNote(title, description);
    setTitle('');
    setDescription('');
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Add New Note</h2>
        <div>
          <label htmlFor="title">Note Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor="description">Note Desc:</label>
          <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button onClick={handleAddNote}>Add to Book</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AddNoteModal;

