import React, {useState, useEffect} from 'react'
import Header from './Components/Header'
import Notes from './Components/Notes'
import Input from './Components/Input'
import './Sass/main.scss'

const App = () => {
  const [notes, setNotes] = useState([])
  const [searchTag, setSearchTag] = useState('')
  
  useEffect(() => {
    !localStorage.getItem('notes') && localStorage.setItem('notes', [])
    setNotes(JSON.parse(localStorage.getItem('notes')))
  }, []) 

  function getSearchedNotes() {
    if (searchTag) {
      const searchNotes = []

      notes.forEach(note => {
        note.tags.forEach(tag => {
          if (tag === searchTag) {
            searchNotes.push(note)
          }
        })
      })
      return searchNotes
    } else {
      return notes
    }
  }

  const searchedNotes = getSearchedNotes()

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const compliteNote = (index, isComplited) => {
    index &&
    setNotes(prev => {
      prev[index].complited = !isComplited
      return [...prev]
    })
  }
  
  const addNote = text => {
    var reg = new RegExp("^#\w*");

    let note = {
      id: new Date().valueOf(),
      text: text.split('#')[0],
      complited: false,
      tags: text.split(' ').filter(item => reg.test(item) && item)
    }

    setNotes([ note, ...notes])
  }

  const removeNote = id => {
    setNotes(notes.filter(note => note.id !== id))
  }

  const saveEditedNote = editedNote => {
    setNotes(prev => {
      for (let i = 0; i < prev.length; i++) {
        if (prev[i].id === editedNote.id) {
          prev[i] = editedNote
          return ([...prev])
        }
      }
    })
   
  }

  return (
    <div className="page">
      <Header setSearchTag={setSearchTag}/>
      <div className="page__wrapper">
        <Input addNote={addNote}/>
        {searchedNotes.length === 0 && searchTag 
          ? 
            <div className="page__error">
              <h2> Ничего не найденно </h2> 
            </div>
          : 
            ''}
        { notes.length > 0 
          ? 
            <Notes notes={searchedNotes} saveEditedNote={saveEditedNote} removeNote={removeNote} compliteNote={compliteNote}/> : 
            <div className="page__error">
              <h2> Заметок нет </h2> 
              <p>создайте заметку</p>
            </div>}
      </div>
    </div>
  )
}

export default App
