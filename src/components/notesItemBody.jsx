import React from 'react';
import { showFormattedDate } from '../utils/index.js';

function NotesItemBody({ title, body, createdAt }) {
    return (
        <div className="note-item__content">
            <h3 className="note-item__title">{title}</h3>
            <p className='note-item__time'>{showFormattedDate(createdAt)}</p>
            <p className="note-item__body">{body}</p>
            <p></p>
        </div>
    );
}

export default NotesItemBody;