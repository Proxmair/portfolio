import React from 'react'

const Work = ({work}) => {
  return (
    <div className='container'>
      <h2>My recent Projects</h2>
      <h1>Field Work</h1>
      <h3>{work.text}</h3>
      <div className='work-list'>
        {work.list.map((item) => (
          <div key={item._id} className='work'>
            <h2>{item.name}</h2>
            <p>
              <img src={item.image} alt='Work Icon' />{item.description}<span><a href={`${item.url}`}>Visit site</a></span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work