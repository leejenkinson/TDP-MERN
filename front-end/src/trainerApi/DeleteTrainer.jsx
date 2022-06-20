import axios from "axios";
import { useState } from "react";


const DeleteTrainer =({getData, fetchData})=>{

        const [id, setId] = useState();

        const handleDelete= (e)=>{
            e.preventDefault();

            axios.delete("http://localhost:4494/trainers/remove/" +id)
           .then((res)=>{
                console.log(res);

                setTimeout(()=>{

                    getData(!fetchData)
                    console.log("loading")
                }, 500)
                console.log("done")
            })
            .catch((error)=>alert(error))
        }

        console.log(fetchData)

        
        return (
          <form >
            <h4>Insert id to delete that record: </h4>
            <input type="number" min={0} placeholder="ID" value={id} onChange={(e)=>{setId(e.target.value)}}/>
            <br/>   
            <h4>Select DELETE (to delete a trainer)</h4>
            <button className="button3" onClick={handleDelete} >DELETE</button>
          </form>
        );
            
}

export default DeleteTrainer;