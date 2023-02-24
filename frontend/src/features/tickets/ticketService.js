import axios from 'axios'

const API_URL = 'api/tickets'

//create new ticket
const createTicket = async (ticketData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.post(API_URL, ticketData, config)
  return response.data
}

//get user tickets
const getTickets = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await axios.get(API_URL, config)
  return response.data
}

//get user one ticket
const getTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const URL = `/api/tickets/${ticketId}`

  const response = await axios.get(URL, config)
  return response.data
}

//close one ticket
const closeTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const URL = `/api/tickets/${ticketId}`

  const response = await axios.put(URL, { status: 'closed' }, config)
  return response.data
}

//delte one ticket
const deleteTicket = async (ticketId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const URL = `/api/tickets/${ticketId}`
  const response = await axios.delete(URL, config)
  return response.data
}

const ticketService = {
  createTicket,
  getTickets,
  getTicket,
  closeTicket,
  deleteTicket,
}
export default ticketService
