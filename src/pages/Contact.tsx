import NavBar from "../components/NavBar";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useState } from "react";

function Contact() {
    const [hovered, setHovered] = useState<boolean[]>([false, false, false]);

    const handleMouseEnter = (index: number) => {
        const newHovered = [...hovered];
        newHovered[index] = true;
        setHovered(newHovered);
    };

    const handleMouseLeave = (index: number) => {
        const newHovered = [...hovered];
        newHovered[index] = false;
        setHovered(newHovered);
    };

    return (
        <div className="Contact" style={styles.contactDiv}>
            <NavBar />
            <div style={styles.contentWrapper}>
                <div className="links" style={styles.links}>
                    <a
                        href="mailto:tobiasfreire005@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card"
                        style={{
                            ...styles.card,
                            transform: hovered[2] ? 'scale(1.05)' : 'scale(1)',
                            transition: 'transform 0.3s ease',
                        }}
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={() => handleMouseLeave(2)}
                    >
                        <div style={styles.cardContent}>
                            <MdOutlineEmail style={styles.icons} />
                            <span>Email</span>
                        </div>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tobias-freire-9800b9284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card"
                        style={{
                            ...styles.card,
                            transform: hovered[1] ? 'scale(1.05)' : 'scale(1)',
                            transition: 'transform 0.3s ease',
                        }}
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={() => handleMouseLeave(1)}
                    >
                        <div style={styles.cardContent}>
                            <FaLinkedin style={styles.icons} />
                            <span>LinkedIn</span>
                        </div>
                    </a>
                    <a
                        href="https://www.instagram.com/tobias.freire?igsh=YnhxOWhxYWtmZzJj"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card"
                        style={{
                            ...styles.card,
                            transform: hovered[0] ? 'scale(1.05)' : 'scale(1)',
                            transition: 'transform 0.3s ease',
                        }}
                        onMouseEnter={() => handleMouseEnter(0)}
                        onMouseLeave={() => handleMouseLeave(0)}
                    >
                        <div style={styles.cardContent}>
                            <FaInstagram style={styles.icons} />
                            <span>Instagram</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

const styles = {
    contactDiv: {
        height: '100vh',
        display: 'flex' as const,
        flexDirection: 'column' as const,
        background: 'linear-gradient(to bottom right, #191970, #4B0082)',
        overflow: 'hidden',
    },
    contentWrapper: {
        flex: 1,
        display: 'flex' as const,
        justifyContent: 'center' as const,
        alignItems: 'center' as const,
    },
    links: {
        display: 'flex' as const,
        flexDirection: 'column' as const,
        alignItems: 'center' as const,
        gap: '1em',
    },
    card: {
        backgroundColor: '#f5f5dc',
        borderRadius: '10px',
        padding: '2em',
        width: '30em',
        textDecoration: 'none',
        color: 'black',
        display: 'flex' as const,
        alignItems: 'center' as const,
        justifyContent: 'center' as const,
    },
    cardContent: {
        display: 'flex' as const,
        alignItems: 'center' as const,
        gap: '1em',
    },
    icons: {
        height: '3em',
        width: '3em',
    },
};

export default Contact;