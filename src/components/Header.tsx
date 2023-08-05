import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className="navbar bg-dark mb-3">
      <a className="navbar-brand text-white" href="#">Student Management System</a>
      <Link to={'/form'}><a className="navbar-brand text-white bg-primary p-2 rounded">Add user</a></Link>
    </nav>
  )
}
