import PropTypes from 'prop-types';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
// const props = { name, age, specialism};
const Trainer = ({ id, name, age, specialism }) => {
    return (

        <Card bg="light" border="warning" style={{ width: '18rem' }}>
            <Card.Img src="https://picsum.photos/id/0/367/267" />
            <Card.Body>
                <Card.Title><h3>ID: {id}</h3> </Card.Title>
                    <p>Name: {name}</p>
                    <p>Age: {age}</p>
                    <p>Specialism: {specialism}</p>
            </Card.Body>
        </Card>
    )
}

export default Trainer;

Trainer.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    specialism: PropTypes.string.isRequired,
}