import axios from "axios";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const DeleteTrainer = ({ getData, fetchData }) => {

  const [id, setId] = useState();

  const handleDelete = (e) => {
    e.preventDefault();

    axios.delete("http://localhost:4494/trainers/remove/" + id)
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
        <Container>
            <Form>
              <Form.Group controlId="formDelete">
                  <Form.Label>Insert id to delete that record:</Form.Label>
                  <Form.Control type="number"   min={0} placeholder="ID" value={id} onChange={(e)=>{setId(e.target.value)}} />
                  <Form.Text className="text-muted">
                    Select DELETE (to delete a trainer)
                  </Form.Text>
                  <br></br>
                  <Button variant="danger" className="button3" onClick={handleDelete} >DELETE</Button>
              </Form.Group>
            </Form>
         </Container>
    </div>
  );

}

export default DeleteTrainer;