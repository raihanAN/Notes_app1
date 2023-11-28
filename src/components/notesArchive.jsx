import React from 'react';
import NotesItem from './notesItem';

function NotesArchived({ notes, onDelete }) {
    const Archived = notes.filter(notes =>
        notes.archived !== false);
    if (Archived.length === 0) {
        return <p>Tidak ada catatan</p>
    } else if (Archived) {
        return (
            <div className="notes-list">
                {Archived.map((note) => (
                    <NotesItem
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        {...note} />
                ))
                }
            </div>
        );
    }
    else {
        return (
            <div className="notes-list">
                {Archived.map((note) => (
                    <NotesItem
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        {...note} />
                ))
                }
            </div>
        );
    }
}


export default NotesArchived;