import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table,Button} from "react-bootstrap";
import { DeleteApi } from "../Redux/Action/action";

const About = () => {
  const object = useSelector((state) => state.reducer.Data);
  const dispatch=useDispatch();
  console.log("object", object);
  const book = object.data;
  console.log("book", book);
  const handleDelete=(id)=>{
   if(window.confirm("Are You Sure Want To Delete The User?")){
    dispatch(DeleteApi(id));
   }
   

  }
  useEffect(() => {}, [object]);
  return (
    <div>
        <center>
      <h1>Table</h1>
      {
          book ? 
      <Table striped bordered hover variant="dark"  size="lm">
        <thead>
          <tr>
            <th>#</th>
            {/* <th>User_ID</th> */}
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {book.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>
                    <Button onClick={()=>handleDelete(item.id)}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
       : <div><p>Table Is Not Found</p></div>
    }
      </center>
    </div>
  );
};

export default About;
