import { notes as initialNotes } from './notes.js'

let notes = [...initialNotes]

export const getAllNotes = () => notes

export const addNote = ({ content, important = false, userId = null }) => {
  const note = {
    id: String(notes.length + 1),
    content,
    important,
    userId
  }

  notes.push(note)
  return note
}

export const updateNoteImportance = (id, important) => {
  notes = notes.map(note =>
    note.id === id ? { ...note, important } : note
  )

  return notes.find(n => n.id === id)
}


export const updateNote = (
  { id, important, userId},
   allowAllUsers = false) => {
  const note = notes.find(n => n.id === id)

  if (!note) {
    return null
  }

  // podemos saltarnos esta restricción si hacemos el allow
  if (!allowAllUsers) {
    // Autorización: solo el dueño puede modificar
    if (userId && note.userId !== userId) {
      return 'FORBIDDEN'
    }
  } else {
    console.log("allow all users! updateNode ")
  }

  note.important = important
  return note
}
