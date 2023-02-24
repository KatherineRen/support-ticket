import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { FaMinus } from 'react-icons/fa'
import { deleteNoteAndGetNotes } from '../features/notes/noteSlice'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

function NoteItem({ noteId, note }) {
  const { user } = useSelector((state) => state.auth)

  const { notes } = useSelector((state) => state.notes)

  const dispatch = useDispatch()
  const { ticketId } = useParams()

  const deleteNoteHandler = (e) => {
    const noteId = note._id
    dispatch(deleteNoteAndGetNotes({ noteId, ticketId }))
    toast.success('Success Delete Note!')
  }

  useEffect(() => {}, [notes])

  return (
    <div
      className='note'
      style={{
        backgroundColor: note.isStaff ? 'rgba(0,0,0,0.7)' : '#fff',
        textColor: note.isStaff ? '#fff' : '#000',
      }}
    >
      <h4>
        Note from {note.isStaff ? <span>Staff</span> : <span>{user.name}</span>}
      </h4>
      <p>{note.text}</p>
      <div className='note-date'>
        {new Date(note.createdAt).toLocaleString('en-US')}
      </div>
      <button className='btn delete-note' onClick={deleteNoteHandler}>
        <FaMinus />
        Delete Note
      </button>
    </div>
  )
}

export default NoteItem
