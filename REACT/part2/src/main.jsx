import ReactDOM from 'react-dom/client'
import App from './App'
import axios from 'axios'

// const promise = axios.get('http://localhost:3001/notes') //PROMESA SIN RESOLVER
// console.log(promise)

// const promise = axios.get('http://localhost:3001/notes') //no hace falta añador variable
// promise.then(response => {
//   console.log(response)
// })
// console.log(promise)
// axios
//   .get('http://localhost:3001/notes') //foma mas legible de formatear las invitaciones de metodos encadenadas
//   .then(response => {
//     const notes = response.data
//     console.log(notes)
//   })

axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
})





const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]



// ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
 

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);