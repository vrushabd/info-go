import Navbar from './components/Navbar'
import Abou from "./components/Abou";
import Textareas from "./components/Textareas";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {


  return (
  
    <>
<Router>  
   <Navbar />
   <Routes>
        <Route path="/" element={<Textareas />} />
        <Route path="/about" element={<Abou />} />
   </Routes>
      </Router>  
      </>

  )
}

export default App
