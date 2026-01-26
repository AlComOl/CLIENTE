import express from 'express'

import { logRequest } from '../middleware/logger.js'

import {
  getAllNotes,
  addNote,
  updateNote
} from '../data/notesStore.js'

const devNotesRouter = express.Router()

// para loguear las requests
devNotesRouter.use(logRequest);

/**
 * GET /api/dev/notes
 */
devNotesRouter.get('/', (req, res) => {
  res.json(getAllNotes())
})

devNotesRouter.post('/', (req, res) => {
  const { content, important } = req.body

  if (!content) {
    return res.status(400).json({ error: 'content missing' })
  }

  const note = addNote({
    content,
    important,
    userId: 'dev' // o null, o 'anonymous'
  })

  res.status(201).json(note)
})



devNotesRouter.put('/:id', (req, res) => {
  const { important } = req.body

  if (typeof important !== 'boolean') {
    return res.status(400).json({ error: 'important must be boolean' })
  }

  const result = updateNote({
    id: req.params.id,
    important,
    userId: 'dev'
  }, true)

  if (!result) {
    return res.status(404).json({ error: 'note not found' })
  } else if (result === "FORBIDDEN" ){
    return res.status(401).json({ error: "Unauthorized userId"})
  }

  res.json(result)
})

export default devNotesRouter
