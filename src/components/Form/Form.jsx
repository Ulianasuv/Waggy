import React from 'react'
import "./Form.scss"

const Form = () => {
  return (
    <section className="form">
        <form>
            <h3>Get <span> 20% Off </span> on first Purchase</h3>
            <input type="email" name="email" id="email" placeholder='your email address'/>
            <input type="text" name="name" id="name" placeholder='your Full Name' />
            <input type="text" name="message" id="message" placeholder='Message'/>
            <button type='submit'>Send Message</button>
        </form>
    </section>
    
        
  )
}

export default Form