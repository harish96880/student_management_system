import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

interface StudentState {
    name : string
    email : string
    age : number
  }

export default function SingleCard({name, email, age} : StudentState) {
    const [student, setStudent] = useState({
        name: "",
        email: "",
        age: ""
    })

    const {id} = useParams()

    useEffect(() => {
        loadStudents()
        console.log(student);
        
    }, [])

    const loadStudents = async() => {
        const result = await axios(`http://localhost:8080/api/v1/student/${id}`)
        setStudent(result.data)
    }


  return (
    <div className='cardView'>
        <div className="">
  <div className="card-body">
    <h5 className="card-title h2">Name : {student.name}</h5>
    <h6 className="card-subtitle mb-2 text-muted h4">Mail : {student.email}</h6>
    <h6 className="card-subtitle mb-2 text-muted h4">Age : {student.age}</h6>

    <Link to ="/" className='mx-auto'><button className='btn btn-outline-primary'>Back</button></Link>
  </div>
</div>

    </div>
  )
}
