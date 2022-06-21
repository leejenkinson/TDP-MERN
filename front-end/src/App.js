import "./App.css";
// import Heading from "./Heading";
import Trainers from "./trainerApi/Trainers";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import AddNewTrainer from "./trainerApi/AddNewTrainer";
import DeleteTrainer from "./trainerApi/DeleteTrainer";


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <nav>
        <ul>
        <li>
            <Link to="/">List of Trainers</Link>
            </li>
            <li>
            <Link to="/addnewtrainer">Add new trainers</Link>
            </li>
            <li>
            <Link to="/deletetrainer">Delete trainers</Link>
            </li>
        </ul>
      </nav>
        <Routes>  
          <Route exact path="/" element={<Trainers/>}/>
          <Route path="/addnewtrainer" element={<AddNewTrainer/>}/>
          <Route path="/deletetrainer" element={<DeleteTrainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
