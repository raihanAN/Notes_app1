import React from 'react';
import { createRoot } from 'react-dom/client';
import NotesApp from './components/notesApp';


const root = createRoot(document.getElementById('root'));
root.render(<NotesApp />);