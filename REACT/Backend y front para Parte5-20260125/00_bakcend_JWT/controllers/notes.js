import express from 'express'
import jwt from 'jsonwebtoken'
import { logRequest } from '../middleware/logger.js'


import {
  getAllNotes,
  addNote,
  updateNote
} from '../data/notesStore.js'

const notesRouter = express.Router()

// para loguear las requests
notesRouter.use(logRequest);

/* =========================
   Middleware helpers
========================= */

const getTokenFrom = (request) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.startsWith('Bearer ')) {
    // devuelve el token del request
    return authorization.replace('Bearer ', '')
  }
  return null
}

/**
 * Middleware: extrae y valida el usuario desde el JWT
 * Si todo va bien, añade request.user
 */
const userExtractor = (request, response, next) => {
  const token = getTokenFrom(request)

  if (!token) {
    return response.status(401).json({ error: 'token missing' })
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)

    if (!decodedToken.id) {
      return response.status(401).json({ error: 'token invalid' })
    }

    request.user = decodedToken
    next()
  } catch {
    return response.status(401).json({ error: 'token invalid or expired' })
  }
}

/* =========================
   Routes
========================= */

/**
 * GET /notes
 * Público
 */
notesRouter.get('/', (request, response) => {
  response.json(getAllNotes())
})

/**
 * POST /notes
 * Protegido con JWT
 */

notesRouter.post('/', userExtractor, (request, response) => {
  // con el middleware hemos anyadido el request.user = decodedToken
// seguramente tengamos ahora:   request.user.id , request.user.role
// si es lo que me viene en el token
  const { content, important } = request.body

  if (!content) {
    return response.status(400).json({ error: 'content missing' })
  }

  const note = addNote({
    content,
    important: important ?? false,
    userId: request.user.id
  })

  response.status(201).json(note)
})

/**
 * PUT /notes/:id
 * Protegido con JWT
 */
notesRouter.put('/:id', userExtractor, (request, response) => {
  const { important } = request.body

  if (typeof important !== 'boolean') {
    return response.status(400).json({ error: 'important must be boolean' })
  }

  const result = updateNote({
    id: request.params.id,
    important,
    userId: request.user.id
  })

  if (result === null) {
    return response.status(404).json({ error: 'note not found' })
  }

  if (result === 'FORBIDDEN') {
    return response.status(403).json({ error: 'not allowed' })
  }

  response.json(result)
})

export default notesRouter
