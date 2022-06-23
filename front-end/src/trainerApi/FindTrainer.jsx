import axios from 'axios';
import { useState } from 'react';
import Trainer from "../Trainer";
import { Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const FindTrainer = ({ getData, fetchData }) => {

    const [id, setId] = useState();
    const [trainer, setTrainer] = useState([]);
    const [request, setRequest] = useState(false);


    const handleSearch = (event) => {
        event.preventDefault();

        axios.get("http://localhost:4494/trainers/read/" + id)
            .then((res) => {
                setTrainer(res.data);
                console.log(res);
                setTimeout(() => {
                    getData(!fetchData)
                    console.log("loading")
                }, 500)
                console.log("done");
                setRequest(true);
            })
            .catch((err) => alert(err));
    }

    //Does not render the result until request = true, means we don't have empty values sitting on page
    const render = () => {
        if (request) {
            return trainer.map = (<Trainer key={trainer._id} id={trainer._id} name={trainer.name} age={trainer.age} specialism={trainer.specialism} />)

        }
    }

    return (
        <>
            <h4>Select FIND (to find a trainer)</h4>

            <Container style={{ width: '30rem' }} className="justify-content-end">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicId">
                        <Form.Label>Insert ID</Form.Label>
                        <Form.Control id="findByIdBtn" type="number" min={0} placeholder="ID" value={id} onChange={(event) => { setId(event.target.value) }} required />
                    </Form.Group>
                    <Button id="findButton" variant="danger" className="button button1" onClick={handleSearch}>FIND TRAINER</Button>
                </Form>
            </Container>
            <br />
            <h4>Result:</h4>
            <Container id="findByIdResult" className="d-flex vw-100">
                <Row className="m-auto">
                    {render()}
                </Row>
            </Container>
        </>
    )
}

export default FindTrainer;