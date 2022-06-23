import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
// const props = { name, age, specialism};
const Trainer = ({id, name, age, specialism}) => {
    return (
        <div>
            <Card className="mb3" border="info" style={{ width: '18rem'}}>
                <Card.Body>
                    <Card.Title><h3>ID: {id}</h3> </Card.Title>
                    <p>Name: {name}</p>
                    <p>Age: {age}</p>
                    <p>Specialism: {specialism}</p>
                </Card.Body>    
            </Card>
        </div>
    )
}

export default Trainer;

Trainer.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    specialism: PropTypes.string.isRequired,
}