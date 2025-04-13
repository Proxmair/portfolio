import React from 'react'

const Work = ({work}) => {
  return (
    <div className='container'>
      <h2>My recent Projects</h2>
      <h1>Field Work</h1>
      <h3>{work.text}</h3>
      <div className='work-list'>
        {work.list.slice().reverse().map((item) => (
          <div key={item._id} className='work'>
            <div>
                <h2>{item.name}</h2>  
              <div>
                <p>{item.description}</p>
                <a href={`${item.url}`}>Visit site</a>
              </div>
            </div>
            <div className='work-image'>
              <img src={item.image} alt='Work Icon' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work