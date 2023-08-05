import React, { useState } from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

export default function FormComponent() {
    const [student, setStudent] = useState({
        name: "",
        email: "",
        age: ""
    });
    const {name, email, age} = student

    const onInputChange = (e:any) => {
        setStudent({...student, [e.target.name]:e.target.value})
    }
  return (
    <div className="formStud w-25 mx-auto">
    <form className='w-75 mx-auto text-white'>
        <div className="form-group">
    <input type="text" placeholder='Enter the name' className="form-control" value={name} onChange={(e) => onInputChange(e)}/>
  </div>
  <div className="form-group">
    <input type="email" className="form-control my-5" placeholder='Enter the email' value={email} onChange={(e) => onInputChange(e)}/>
  </div>
  <div className="form-group">
    <input type="number" className="form-control my-5" placeholder='Enter the age' value={age} onChange={(e) => onInputChange(e)}/>
  </div>
  <button type="submit" className="btn btn-primary m-1">Submit</button>
  <Link to={'/'}><button className="btn btn-danger m-1">Cancel</button></Link>
</form>
</div>
  )
}
