import React, { useState } from 'react'
import '../index.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

interface StudentState {
  name : string
  email : string
  age : number
}

export default function FormComponent({name, email, age} : StudentState) {
  let navigate = useNavigate()

    const [student, setStudent] = useState({
        name: "",
        email: "",
        age: ""
    });

    const onInputChange = (e) => {
        setStudent({...student, [e.target.name]:e.target.value})
    }

    const onSubmit = async (e) => {
      e.preventDefault()
      await axios.post(`http://localhost:8080/api/v1/student`, student)
      navigate("/")
    }

  return (
    <div className="formStud w-25 mx-auto">
    <form className='w-75 mx-auto text-white' onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
    <input type={"text"} placeholder='Enter the name' className="form-control" value={name} name='name' onChange={(e) => onInputChange(e)}/>
  </div>
  <div className="form-group">
    <input type={"email"} className="form-control my-5" placeholder='Enter the email' value={email} name='email' onChange={(e) => onInputChange(e)}/>
  </div>
  <div className="form-group">
    <input type={"number"} className="form-control my-5" placeholder='Enter the age' value={age} name='age' onChange={(e) => onInputChange(e)}/>
  </div>
  <button type={"submit"} className="btn btn-primary m-1">Submit</button>
  <Link to={'/'}><button className="btn btn-danger m-1">Cancel</button></Link>
</form>
</div>
  )
}
