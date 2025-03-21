import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './styles/contact.css';
import './styles/modal.css';

const Contact = () => {
    const form = useRef();
    const [modalMessage, setModalMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm("service_z77ru2w", "template_4ioaod6", form.current, {
                publicKey: "rO3PPiW8hQd9pPsKl",
            })
            .then(
                () => {
                    setModalMessage("Your message has been sent!");
                    setIsModalOpen(true);
                    form.current.reset(); 
                },
                (error) => {
                    setModalMessage(`Failed to send message: ${error.text}`);
                    setIsModalOpen(true);
                }
            );
    };

    return (
        <div className="contact" id="contact-section">
            <div className="form-container">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form__header">
                        <h1>Hit me up!</h1>
                        <p>Have a question or want to work together?</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="user_name">Name</label>
                        <input name="user_name" type="text" placeholder="Your name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="user_email">Email</label>
                        <input name="user_email" type="email" placeholder="email@something.com" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" placeholder="Leave a message..." required />
                    </div>

                    <button type="submit">Send Message</button>
                </form>

                <img
                    className="contact-image"
                    src="https://images.unsplash.com/photo-1626428091984-48f9ffbf927c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fDNkJTIwZWZmZWN0fGVufDB8fDB8fHww"
                    alt=""
                />
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <img src="https://img.icons8.com/ios11/512/40C057/ok.png"/>
                        <h3>Success</h3>
                        <p>{modalMessage}</p>
                        <button onClick={() => setIsModalOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
