import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";

const NotePage = () => {
  const { id } = useParams();
  const [note, setNote] = useState([]);
  const navigate = useNavigate(); // useNavigate hook for redirection

  useEffect(() => {
    const getNote = async () => {
      try {
        const response = await axios.get(`/api/note/${id}/`);
        const data = await response.data;
        setNote(data);
      } catch (error) {
        console.log("Error fetching notes:", error);
      }
    };
    getNote();
  }, [id]);

  const updateNote = async () => {
    try {
      await axios.put(`/note/${id}/update/`, note, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/"); // Redirect after update
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };
  const handleSubmit = () => {
    updateNote();
  };

  return (
    <>
      {note !== null ? (
        note.id === parseInt(id) ? (
          <div>
            <textarea
              defaultValue={note.body}
              onChange={(e) => setNote({ ...note, body: e.target.value })}
              cols="30"
              rows="10"
            ></textarea>
            <button onClick={handleSubmit} className="btn btn-success">
              Update
            </button>
          </div>
        ) : (
          <p>Note not found.</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default NotePage;
