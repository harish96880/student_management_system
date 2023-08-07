import React, { useEffect } from 'react'
import axios from 'axios'
import '../index.css'
import { Link, useParams } from 'react-router-dom'

export default function StudentTable() {
    const [student, setStudent] = React.useState([])
    const {id} = useParams()

    useEffect(() => {
        loadStudents()
    }, [])

    const loadStudents = async() => {
        const result =  await axios.get("http://localhost:8080/api/v1/student")
        console.log(result.data);
        
        setStudent(result.data)
    }

    const deleteStudent = async(id) => {
        const result = await axios.delete(`http://localhost:8080/api/v1/student/${id}`)
        loadStudents()
    }


  return (
    <>
    <div className="tableStud ">
  <table className="w-100 table-bordered">
    <thead className="thead-dark">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Age</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
        {
        student.map((stud, id) => (
            <tr>
            <td>{stud.name}</td>
            <td>{stud.email}</td>
            <td>{stud.age}</td>
            <td><Link to={`/edit/${stud.id}`}><button className='btn btn-primary m-1'>Edit</button></Link><Link to={`/view/${stud.id}`}><button className='btn btn-success m-1'>View</button></Link><button className='btn btn-danger m-1' onClick={() => deleteStudent(stud.id)}>Delete</button></td>
          </tr>
        ))
        }
    
    </tbody>
  </table>
  </div>
</>

  )
}
