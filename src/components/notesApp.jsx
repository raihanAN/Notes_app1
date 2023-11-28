import React from 'react';
import NotesList from './notesList';
import { getData } from '../utils/index';
import NotesInput from './notesInput';
import NotesArchived from './notesArchive';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getData(),
            archivedNotes: [],
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }
    onArchiveHandler(id) {
        const notes = this.state.notes.map(note => note.id !== id);
        if (notes) {
            archived = true;
        } else {
            archived = false;
        }
    }
    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            if (title == "") {
                return (alert("Judul anda kosong"))
            } else if (body == "") {
                return (alert("Isi aku juga dong"))
            }
            else {
                return {
                    notes: [
                        ...prevState.notes,
                        {
                            id: +new Date(),
                            title,
                            createdAt: new Date().toLocaleDateString(),
                            body,
                            archived: false,
                        }
                    ]
                }
            }
        });
    }


    render() {
        return (
            <div className="note-app">
                <h1>Aplikasi Catatan</h1>
                <h2>Tambah Catatan</h2>
                <NotesInput AddNote={this.onAddNoteHandler} />
                <h2>Daftar Catatan</h2>
                <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                <h2>Arsip</h2>
                <NotesArchived notes={this.state.notes} onDelete={this.onDeleteHandler} />
            </div>
        );
    }
}


export default NotesApp;