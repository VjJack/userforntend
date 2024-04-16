import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
export default function Home() {




const [users,setUser]=useState([]);



const{id}=useParams();

useEffect(()=>{
loadUsers();
},[]);

const loadUsers=async()=>{
    const result=await axios.get("http://localhost:8080/users");
    setUser(result.data);
}

const deleteUser=async(id)=>
{
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadUsers();
}

  return (
    <div className='container'  className1="card-img">
     
        <div className='py-4' >
        
        <table className="table table-bordered border-primary">
  <thead>
    <tr>
      <th scope="col">sid</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
            <tr>
      <th scope="row" >{user.id}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <button className="btn btn-primary mx-2">View</button>
        <Link className="btn btn-outline-primary mx-2" to={`/EditUser/${user.id}`}>Edit</Link>
        <button className="btn btn-danger mx-2" 
         onClick={()=>deleteUser(user.id)}>Delete</button>
      </td>
    </tr>

        ))
    }



    
    
  </tbody>
</table>
        </div>
       
    </div>
  )
}
