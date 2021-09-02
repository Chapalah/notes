import userEvent from '@testing-library/user-event'
import React, { useState, useRef } from 'react'

const ModalEdit = ( {setVisibleModal, note, saveEditedNote} ) => {
    const [editNote, setEditNote] = useState(note)
    const inputTagRef = useRef()

    const removeTag = (tg) => {
        setEditNote(prev => {
            return {...prev, tags: prev.tags.filter(tag => tag !== tg)}
        })
    }

    const addTags = (e) => {
        e.preventDefault()

        const reg = new RegExp("^#\w*");
        const newTags = inputTagRef.current.value.split(' ')

        setEditNote(prev => ({...prev, tags: [...prev.tags, ...newTags.filter(item => reg.test(item) && item)]}))
        inputTagRef.current.value = ''
    }

    return (
        <div className="modal" onClick={() => setVisibleModal(false)}> 
            <div className="modal__wrapper" onClick={event => event.stopPropagation()}>
                <div className="modal__close" onClick={() => setVisibleModal(false)}>X</div>
                <div className="modal__content">
                    <h2>Редактирование заметки</h2>
                    <input className="modal__input"
                        value={editNote.text}
                        onChange={e => setEditNote(prev => ({...prev, text: e.target.value}))}
                    />
                    <div className="modal__tagedit">
                        <p></p>
                        <input className="modal__input" 
                            ref={inputTagRef}
                            placeholder='Введите тэги, которые нужно добавить'
                        />
                        <button className="modal__btn" onClick={addTags}>Добавить</button>
                    </div>
                    

                    <p>Кликните на тэги, которые нужно удалить</p>
                    <div className="note__tags">
                        {editNote.tags && editNote.tags.map(tag => (
                            <span className="note__tag" onClick={() => removeTag(tag)} key={tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <button className="modal__btn"
                        onClick={() => {
                                saveEditedNote(editNote)
                                setVisibleModal(false)
                            }}
                    >
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ModalEdit
