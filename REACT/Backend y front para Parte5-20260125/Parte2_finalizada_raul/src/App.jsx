import Note from './components/Note'
import Footer from './components/Footer'
import Notification from './components/Notification'
import axios from 'axios'
import { useState, useEffect } from 'react'
import noteService from './services/notes'
import loginService from './services/login'

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 
  const [user, setUser] = useState(null)

  
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])

  console.log('render App component!', notes.length, ' notes')

 const handleLogin = async event => {   
    event.preventDefault()
    
    try {
      const user = await loginService.login({ username, password })

       window.localStorage.setItem(
        'loggedNoteappUser', JSON.stringify(user)
      )

      console.log(window.localStorage);

       noteService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch {
      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }  
}


  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1)
    };

    noteService.create(noteObject)
      .then(returnedNote => {
        console.log(returnedNote)
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
      .catch((e) => {
        console.log("post notes ERROR: ")
        console.log(e)
      })

    console.log('button clicked', event.target);

  }

  const toggleImportanceOf = (id) => {

    const url = `http://localhost:3009/dev/api/notes/${id}`;
    console.log(url);
    const note = notes.find(n => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService.update(id, changedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => note.id === id ? returnedNote : note));
      })
      .catch(error => {
        console.log("ERROR: respuesta del PUT method");
        console.log(error);
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)

        setNotes(notes.filter((n) => n.id !== id));
      })


    axios.put(url, changedNote)
      .then(response => {
        console.log("PUT method response")
        console.log(response)
        setNotes(notes.map((note) => note.id !== id ? note : response.data))
      })

    console.log(`Importanceof ${id} needs to be toggled`)

  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)

  }

  const loginForm = () => (
    <form onSubmit={handleLogin}>
     <div>
        username
          <input
            type="text"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
      </div>
      <div>
        <label>
          password
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </label>
      </div>
      <button type="submit">login</button>
    </form>
  )

  const noteForm = () => (
    <form onSubmit={addNote}>
      <input value={newNote} onChange={handleNoteChange} />
      <button type="submit">save</button>
    </form>
  )



  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);
// console.log(window.localStorage);

  return (
    
   <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />

      
      
      {/* <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            username
            <input
              type="text"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            password
            <input
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </label>
        </div>
        <button type="submit">login</button>
      </form> */}
      
      {!user && loginForm()}
       {user && (
      <div>
        <p>{user.name} logged in</p>
        {noteForm()}
      </div>
    )}
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>

      <Footer />
    </div>
  )
}

export default App
