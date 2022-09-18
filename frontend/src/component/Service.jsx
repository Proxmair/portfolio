import React from 'react'

const Service = ({service}) => {
  console.log(service)
  return (
    <div className='container'>
        <h2>Things I Offer</h2>
        <h1>Service</h1>
        <h3>{service.text}</h3>
        {service.list.map((service) => (
          <div className='service'>
          <h2>{service.name}</h2>
          <p>{service.description}</p> 
          </div>
        ))}
    </div>
  )
}

export default Service
