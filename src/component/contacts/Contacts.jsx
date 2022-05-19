import React, {useState} from 'react'
import './Contact.scss'

export default function Contacts()
{
    const [message, setMessage] = useState(false)
    const [email, setEmail] = useState('');


    const handleSubmit = (e) =>
    {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        value={email}
                        onChange={(e) =>setEmail(e.target.value)}
                        type="text"
                        placeholder="Email"
                    />
                    <textarea
                        placeholder="Message"
                        name=""
                        id=""
                        cols="30"
                        rows="10">

                    </textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply ASAP</span>}
                </form>
            </div>
        </div>
    )
}



 