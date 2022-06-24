import "./App.css";
// import Heading from "./Heading";
import Trainers from "./trainerApi/Trainers";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import AddNewTrainer from "./trainerApi/AddNewTrainer";
import DeleteTrainer from "./trainerApi/DeleteTrainer";
import FindTrainer from "./trainerApi/FindTrainer";
import { Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div className="App">
      <Container>

        <Nav className="justify-content-center" variant="pills" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/">List of Trainers</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/addnewtrainer">Add new trainers</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/deletetrainer">Delete trainers</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/FindTrainer">Find a Trainer</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Trainers />} />
          <Route path="/addnewtrainer" element={<AddNewTrainer />} />
          <Route path="/deletetrainer" element={<DeleteTrainer />} />
          <Route exact path="/FindTrainer" element={<FindTrainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
