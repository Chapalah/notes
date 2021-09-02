import React, { useState, useEffect } from 'react'
import ModalEdit from './ModalEdit'

const Note = ( {note, index, compliteNote, removeNote, saveEditedNote} ) => {
    const [visibleModal, setVisibleModal] = useState(false)
    let currnetNote = ''

    useEffect(() => {
        visibleModal ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
    }, [visibleModal])

    return (
    <>
            <div className="note" onClick={() => {compliteNote(index, note.complited)}} key={note.id}>
                <div className="note__wrapper">
                    {visibleModal && <ModalEdit saveEditedNote={saveEditedNote} setVisibleModal={setVisibleModal} note={note}/>}
                    <div className="note__info">
                        <div className={note.complited ? "note__text complited" : "note__text"}>
                            {index + 1}. {note.text}
                        </div>
                        <div className="note__tags">
                            {note.tags.map(tag => (
                                <span className="note__tag" style={{textDecoration: 'none'}}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="note__buttons">
                        <button className="note__btn"
                            onClick={(e) => {
                                    e.stopPropagation()
                                    setVisibleModal(true)
                                }
                            }
                        >
                            Редактировать
                        </button>
                        <button className="note__btn"
                            onClick={() => {removeNote(note.id)}}
                        >
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Note
