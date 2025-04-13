import React from 'react'
const About = ({about}) => {
  console.log(about, 'about')
  return (
    <div className='container'>
      <h2>Get to Know</h2>
      <h1>About</h1>
      <h3>
        {about.text.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h3>
      <div className='skills-container'>
        {about.list.map((item) => (
          <div key={item._id}>
            <a href={item.url} className='coin'><img src={item.image} alt={"HTML-Icon"} /></a>
            <div className='coin-shadow'></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About