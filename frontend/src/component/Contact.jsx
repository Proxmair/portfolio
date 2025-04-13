import React,{useRef,useState} from 'react';
import emailjs from '@emailjs/browser';
import {AiOutlineSend} from 'react-icons/ai';
const Contact = () => {
  const form =useRef();
  const [resultDisplay, setresultDisplay] = useState('none');
  const [isLoading, setisLoading] = useState(false);
  const contactFormHandler=(e)=>{
    e.preventDefault();
    setisLoading(true);
    emailjs.sendForm('service_8cww9td', 'template_k18rpwi', form.current, 'Em8fBmsEVCuKn56zo')
    .then((result) => {
        setresultDisplay('block')
        setTimeout(() => {
          setresultDisplay('none')
        }, 2000);
        setisLoading(false);
        e.target.reset();
    }, (error) => {
        console.log(error.text);
        e.target.reset();
        setisLoading(false);
    });
  }
  return (
    <div className='container'>
      <h2>Let's Talk</h2>
      <h1>Contact</h1>
      <h3>Get in touch through the form below, or by emailing me at <span>umair.xmair@gmail.com</span>.</h3>
      <form className='contact-form'  ref={form} onSubmit={contactFormHandler}>
        
        <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name='name'
          placeholder="Enter your name"
          required
        />
         <label htmlFor="email">Email:</label>
        <input
          id='email'
          type="email"
          placeholder="Enter your email address"
          required
          name='email'
        />
         <label htmlFor="message">Message:</label>
        <textarea
        id='message'
          placeholder="Enter your message"
          required
          cols="30"
          rows="10"
          name='message'
        ></textarea>
        <button disabled={isLoading} className={`btn btn-submit`} type='submit' >
          {isLoading ? 'loading...' : <><AiOutlineSend/> Send</>}
        </button>
        </div>
        <div style={{display:`${resultDisplay}`}} className='from-result'>
          <h3>Thanks! Your Message is has been successfully sent.</h3><h3>I will reach you soon. </h3>
        </div>
        

      </form>
    </div>
  )
}

export default Contact