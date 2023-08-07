import React from 'react'
import Header from '../components/Header'
import '../index.css'
import SingleCard from '../components/SingleCard'

export default function SingleUserPage() {
  return (
    <div>
        <Header />
        <div className="container">
        <SingleCard />
        </div>
    </div>
  )
}
