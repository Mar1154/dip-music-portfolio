import './styles/footer.css';

const Footer = () => {
    return (
        <footer>
            <p>© 2025 DippyDip</p>
            <div className="footer-icons">
                <a href="https://github.com/Mar1154">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/marion-bailey-0803ba345/">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://codepen.io/Mar1154">
                    <i className="fab fa-codepen"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;