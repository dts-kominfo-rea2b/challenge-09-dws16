// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import './Contact.css';
import React from 'react';

const Contact = (props) => {
    const { name, photo, phone, email } = props.data;
    return (
        <div className="Contact">
            <div className="Contact-avatar">
                <img src={photo} alt="Contact avatar" />
            </div>
            <div className="Contact-info">
                <h2>{name}</h2>
                <p>{phone}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Contact;