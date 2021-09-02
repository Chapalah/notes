import React, { useState } from 'react'

const Input = ( { addNote } ) => {
    const [value, setValue] = useState('')

    const createNote = e => {
        e.preventDefault()
        
        if (value.trim()) {
            addNote(value)
            setValue('')
        } else {
            alert('Заполните поле!')
        }
    }

    return (
        <div className="input">
            <div className="input__wrapper">
                <form className="input__body"
                    onSubmit={createNote}
                >
                    <input type="text"
                        placeholder="Введите текст заметки (вы может здесь вводить теги, они атоматически добавятся)" 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button className="input__button" type="submit">
                        Создать
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Input
