import React, { useEffect, useState } from 'react'
const NotesListPage = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        const getNotes = async() => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/notes/')
                const data =  await response.json()
                setNotes(data)
                
            } catch (error) {
                console.log(error)
            }
        }

        getNotes()

    },[])


  return (
    <div className=' container'>
        <h3 className=''>Notes</h3>
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>Note</th>
                </tr>
            </thead>
            <tbody>
                {notes.length > 0 && notes.map((note) => (
                <tr key={note.id}>
                     <td>{note.body}</td>
                 </tr>
                ))}
               
            </tbody>
        </table>
        
    </div>
  
  )
}

export default NotesListPage