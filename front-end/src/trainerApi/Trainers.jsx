import axios from "axios";
import { useEffect, useState } from "react";
import Trainer from "../Trainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";


const Trainers = () => {

    const [trainers, setTrainers] = useState([]);
    const [fetchData, setFetchData] = useState(false);


    useEffect(() => {
        axios.get("http://localhost:4494/trainers/readAll")
            .then(res => setTrainers(res.data))
            .catch(err => console.error(err));
    }, [fetchData]);


    return (
        <>
            <h2>List of trainers: </h2>
               <Container id="fullTrainerList" className="d-flex vw-100">
                    <Row className="m-auto">
                    {
                        trainers.map
                        (trainer => <Trainer 
                            key={trainer._id} 
                            id={trainer._id} 
                            name={trainer.name} 
                            age={trainer.age} 
                            specialism={trainer.specialism} />)
                    }
                    </Row>
               </Container> 
            <br />
        </>
    );
}

export default Trainers;
