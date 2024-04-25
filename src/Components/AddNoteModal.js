import React, { useState, useContext } from 'react';
import { NotebookContext } from '../Context/NotebookContext';
import './AddNoteModal.css';

function AddNoteModal({ isOpen, onClose }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addNote } = useContext(NotebookContext);

  const handleAddNote = () => {
    addNote({
      title: title,
      description: description
    });
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
}

export default AddNoteModal;
