import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { deleteTicket } from '../features/tickets/ticketSlice'

function TicketItem({ ticket }) {
  const dispatch = useDispatch()

  const deleteOneTicket = (e) => {
    dispatch(deleteTicket(ticket._id))
  }

  return (
    <div className='ticket'>
      <div>{new Date(ticket.createdAt).toLocaleString('en-US')}</div>
      <div>{ticket.product}</div>
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <Link to={`/tickets/${ticket._id}`} className='btn btn-reverse btn-sm'>
        View
      </Link>
      <button className='btn btn-sm' onClick={deleteOneTicket}>
        <AiOutlineClose />
        delete
      </button>
    </div>
  )
}

export default TicketItem
