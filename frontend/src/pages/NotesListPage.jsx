import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
const NotesListPage = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        const getNotes = async() => {
            try {
                const response = await axios.get('/api/notes/')
                const data = response.data;
                setNotes(data)
            } catch (error) {
                console.log(error)
            }
        }
        getNotes()

    },[])


  return (
    <div className=' container'>
        <h3 className=''>Notes({notes.length})</h3>
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>Note</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {notes.length > 0 && notes.map((note, index) => (
                    <tr key={index}>
                        <td>{note.body}</td>
                        <td><Link to={`/note/${note.id}`} className='btn btn-primary'> View</Link></td>
                    </tr>
                ))}
             
               
            </tbody>
        </table>
        
    </div>
  
  )
}

export default NotesListPage