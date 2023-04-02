import { Link } from "react-router-dom";
const Footer = () => {
    return ( 
        <footer>
            <div className="box">
                <div className="link-wrap">
                    <div className="link">
                        <Link to='terms' className="link">Terms and conditions</Link>
                    </div>
                </div>
                <div className="contact-wrap">
                    <h3>Contacts</h3>
                    <p>phone: 1234566778</p>
                    <p>email: bsinilkov@gmail.com</p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;