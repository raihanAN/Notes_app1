import React from 'react';

function ArchiveButton({ id, onArchive, archived }) {
    return <button className='note-item__archive' onClick={() => onArchive(id)}>{archived ? "Pindahkan" : "Arsipkan"}</button>
}

export default ArchiveButton;