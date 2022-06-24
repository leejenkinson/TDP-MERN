import axios from "axios";
import { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AddNewTrainer = ({ getData, fetchData }) => {

    //3 states
    //name
    //age
    // specialism
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [special, setSpecial] = useState();
    //and id now:
    const [id, setId] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:4494/trainers/create", {
            "_id": id,
            "name": name,
            "age": age,
            "specialism": special
        })
            .then((res) => {
                console.log(res);

                setTimeout(() => {

                    getData(!fetchData)
                    console.log("loading")
                }, 500)
                console.log("done")
            })
            .catch((error) => alert(error))
    }

    const handleUpdate = (e) => {
        e.preventDefault();

        axios.put("http://localhost:4494/trainers/update/" + id, {
            "_id": id,
            "name": name,
            "age": age,
            "specialism": special
        })
            .then((res) => {
                console.log(res);

                setTimeout(() => {

                    getData(!fetchData)
                    console.log("loading")
                }, 500)
                console.log("done")
            })
            .catch((error) => alert(error))
    }

    console.log(fetchData)


    return (
        <div>
            <h4>Insert values into the following boxes: </h4>
            <Container style={{ width: '30rem' }} className="justify-content-end">
          <Form>
            <Row>
              <Col md>
                <Form.Group controlId="formID">
                  <Form.Label>ID</Form.Label>
                  <Form.Control type="number" min={0} placeholder="Insert ID here" value={id} onChange={(e) => { setId(e.target.value) }}/>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Insert Name here" value={name} onChange={(e) => { setName(e.target.value) }} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md>
                <Form.Group controlId="formAge">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="number" min={1} max={150} placeholder="Insert Age here" value={age} onChange={(e) => { setAge(e.target.value) }}/>
                  
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group controlId="formSpecialism">
                  <Form.Label>Specialism</Form.Label>
                  <Form.Control type="text" placeholder="Insert Specialism here" value={special} onChange={(e) => { setSpecial(e.target.value) }} />
                   
                </Form.Group>
              </Col>
            </Row>
            <h4>Select POST (to add a new trainer)</h4>
            <Button variant="primary" className="button1" onClick={handleSubmit} >POST</Button>
            <h4>Select UPDATE (to update trainer)</h4>
            <Button variant="secondary" className="button2" onClick={handleUpdate} >UPDATE</Button>
        
          </Form>
          </Container>
           </div> );
}

export default AddNewTrainer;