import React, { useEffect } from 'react'
import axios from 'axios'
import '../index.css'

export default function StudentTable() {
    const [student, setStudent] = React.useState([])

    useEffect(() => {
        loadStudents()
    }, [])

    const loadStudents = async() => {
        const result =  await axios.get("http://localhost:8080/api/v1/student")
        console.log(result.data);
        
        setStudent(result.data)
    }

    const deleteStudent = async(id) => {
        const result = await axios.delete(`http://localhost:8080/api/v1/student/${id}`, id)
        setStudent(result.data)
    }

    const handleDeleteAll:React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        deleteStudent()
    }
  return (
    <>
    <div className="">
  <table className="tableStud w-75 mx-auto table-bordered">
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
            <td><button className='btn btn-primary m-1'>Edit</button><button className='btn btn-success m-1'>View</button><button className='btn btn-danger m-1' onClick={handleDeleteAll}>Delete</button></td>
          </tr>
        ))
        }
    
    </tbody>
  </table>
  </div>
</>

  )
}
