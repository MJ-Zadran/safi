import { useState } from 'react';
import './contact.css';
import Btn from '../Btn';


function Contact(){
    const [detail, setDetail] = useState({
        fName: '',
        lName: '',
        email: '',
        text: ''
    })

    function handleInput(event){
        const {name, value} = event.target;

        setDetail((preValue) => {
            return {...preValue,[name]: value}
        })
    }

    function handleSubmit(e){

        setDetail({
            fName: '',
            lName: '',
            email: '',
            text: ''
        })
        e.preventDefault();
    }

    return <div className='contact-section' id='contact'>
            <form>
                <input name='fName' onChange={handleInput} placeholder='First Name' value={detail.fName} required />
                <input name='lName' onChange={handleInput} placeholder='Last Name' value={detail.lName} required />
                <input name='email' onChange={handleInput} placeholder='Enter Email' value={detail.email} required />
                <textarea name='text' onChange={handleInput} placeholder='Discribe you order' rows="3" value={detail.text} required />
                <Btn onSubmit={handleSubmit} text="Send"></Btn>
            </form>
    </div>
}

export default Contact;