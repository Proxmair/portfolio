import React, { useRef, useContext } from 'react'
import { motion } from 'framer-motion'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { BiSend } from 'react-icons/bi'
import emailjs from 'emailjs-com'
import QRCODE from './assets/whatsappQRCode.png';
import { AppContext } from './App';
const Contact = () => {

  const { modeMessage } = useContext(AppContext);
  const form = useRef();
  const altmessage = "Whatsapp QR Code";
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ioefads', 'template_k18rpwi', form.current, 'Em8fBmsEVCuKn56zo')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className={modeMessage ? 'container container-daymode' : 'container container-nightmode'}>
      <div className="contact-container">
        <div className='contact-title'>
          <h1 className={modeMessage ? 'daytext' : ''} >Contact Me</h1>
          <h5>Get in Touch</h5>
        </div>
        <div className="contact-options">
          <article className="contact-option">

            <div>
              <h3 className={modeMessage ? 'daytext' : ''} >Email <MdOutlineEmail className='contact-icon' /></h3>
              <h5><a className='mailhref' href="mailto:umair.xmair@gmail.com">umair.xmair@gmail.com</a></h5>
              <h3 className={modeMessage ? 'daytext' : ''} ><a href="https://wa.me/+923360336130">Whatsapp</a> <BsWhatsapp className='contact-icon' />  </h3>
            </div>
            <div>
              <img className='contact-qrcode' src={QRCODE} alt={altmessage} />
            </div>
          </article>
        </div>
        <form className={modeMessage ? 'contact-form contact-form-daymode' : 'contact-form contact-form-nightmode'} ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your email' required />
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-2' >Send Message <BiSend className='btn-2child' /> </button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact