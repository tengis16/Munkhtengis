import HomePage from "./pages/homepage";
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css"

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<Form/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;