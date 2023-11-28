import React from 'react';
import NotesItem from './notesItem';

function NotesList({ notes, onDelete, onArchive }) {
    const notArchive = notes.filter(notes =>
        notes.archived === false);
    if (notArchive.length === 0) {
        return <p>Tidak ada catatan</p>
    } else {
        return (
            <div className="notes-list">
                {notArchive.length === 0 ?
                    <p>Tidak ada catatan</p>
                    :
                    notArchive.map((note) => (
                        <NotesItem
                            key={note.id}
                            id={note.id}
                            onDelete={onDelete}
                            onArchive={onArchive}
                            {...note} />
                    ))
                }
            </div>
        );
    }

}
export default NotesList;