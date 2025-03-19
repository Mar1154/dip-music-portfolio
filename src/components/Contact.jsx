import './styles/contact.css';

const Contact = () => {
    return (
        <div className="contact" id="contact-section">
            <div className="form-container">    
                <form>
                    <div className="form__header">
                        <h1>Hit me up!</h1>
                        <p>Have a question or want to work together?</p>
                    </div>

                    <div className="form-group">
                        <label for="name">Name</label>
                        <input name="name" type="text" placeholder="Your name" />
                    </div>
                    
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input name="email" type="email" placeholder="email@something.com" />
                    </div>

                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea name="message" placeholder="Leave a message..." />
                    </div>
                    
                    <button type="submit">Send Message</button>

                    {/* <div className="contact__platforms">
                        <a href="https://github.com/Mar1154">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/marion-bailey-0803ba345/">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://codepen.io/Mar1154">
                            <i className="fab fa-codepen"></i>
                        </a>
                    </div> */}


                </form>
                <img className="contact-image" src="https://images.unsplash.com/photo-1626428091984-48f9ffbf927c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fDNkJTIwZWZmZWN0fGVufDB8fDB8fHww" alt=""/>
            </div>   
        </div>
    );
}

export default Contact;