import express from 'express'
import cors from 'cors'
import loginRouter from './controllers/login.js'
import notesRouter from './controllers/notes.js'
import devNotesRouter from './controllers/devNotes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/login', loginRouter)
app.use('/api/notes', notesRouter)
app.use('/dev/api/notes', devNotesRouter)

export default app
