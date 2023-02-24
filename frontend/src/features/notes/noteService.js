import axios from 'axios'

const API_URL = '/api/tickets/'

//get user ticket notes
const getNotes = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + ticketId + '/notes', config)
  return response.data
}

//create ticket notes
const createNote = async (noteText, ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(
    API_URL + ticketId + '/notes',
    {
      text: noteText,
    },
    config
  )
  return response.data
}

//delete note
const deleteNote = async (noteId, ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const URL = `/api/tickets/${ticketId}/notes/${noteId}`
  const response = await axios.delete(URL, config)
  return response.data
}

const noteService = {
  getNotes,
  createNote,
  deleteNote,
}
export default noteService
