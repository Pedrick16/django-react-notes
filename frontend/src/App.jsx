import { Routes, Route } from "react-router-dom";
import NotesListPage from "./pages/NotesListPage";
import NotePage from "./pages/NotePage";
import NotFound from "./pages/NotFound";

function App() {
  return (
   <>
      <Routes>
        <Route path='/' element={<NotesListPage />}  />
        <Route path='/note/:id/' element={<NotePage />}  />
        <Route path='*' element={<NotFound />}  />
      </Routes>
   </>
  )
}
export default App


