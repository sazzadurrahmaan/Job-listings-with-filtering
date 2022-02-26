import React from 'react'
import './Job.css'

export const Job = ({job}) => {
    
    const {company, position, languages, role, location, level} = job;


   

  return (
    <div className='job'>
        <h2>{position}</h2>
        <h3>{company}</h3>
        <h4>{languages}</h4>
        <p>{role}</p>
        <p>{level}</p>
        <p>{location}</p>
    </div>
  )
}
