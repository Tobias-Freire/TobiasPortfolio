import '../component-styles/ContactCard.css';
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

function ContactCard() {
    return (
        <div className="contact-card-conteiner">
            <div className="contact-title">
                <span><b>Contact me</b></span>
            </div>
            <div className="contact-content">
                <span>
                    <MdOutlineMail />
                    <a href="mailto:tobiasfreire005@gmail.com">
                        tobiasfreire005@gmail.com
                    </a>
                </span>
                <span>
                    <FaPhone />
                    +55 (83)996657778
                </span>
            </div>
        </div>
    );
}

export default ContactCard;
