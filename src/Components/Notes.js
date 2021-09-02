import React, { useState, useEffect } from 'react'
import ModalEdit from './ModalEdit'
import Note from './Note'

const Notes = ( {notes, compliteNote, removeNote, saveEditedNote} ) => {
    

    return (
        <div className="notes">
            <div className="notes__wrapper">
                {notes.map((note, index) => (
                    <Note key={note.id} note={note} index={index} compliteNote={compliteNote} removeNote={removeNote} saveEditedNote={saveEditedNote}/>
                ))}
            </div>                
        </div>
    )
}

export default Notes
