import React from 'react';
import NotesItemBody from './notesItemBody';
// import ContactItemImage from './ContactItemImage';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NotesItem({ id, title, body, createdAt, onDelete, archived, onArchive }) {
    return (
        <div className="note-item">
            {/* <ContactItemImage imageUrl={imageUrl} /> */}
            <NotesItemBody title={title} body={body} createdAt={createdAt} archived={archived} />
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchiveButton id={id} onArchive={onArchive} />
        </div>
    );
}

export default NotesItem;