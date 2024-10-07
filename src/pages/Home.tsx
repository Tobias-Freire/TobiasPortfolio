import { useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

function Home() {
    const [isHovered, setHovered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const images = ['myIcon1.png', 'myIcon2.png', 'myIcon3.png'];
    const texts = [
        'Hire me pleaseee :(', 
        'Wait, you want to hire me?', 
        <span>See <a href="/contact" style={{ color: 'black' }}>my contacts</a> :D</span>
    ];

    const navigate = useNavigate();

    const handleClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleButtonClick = () => {
        if (currentIndex === 2) {
            navigate('/contact');
        } else {
            handleClick();
        }
    };

    const styles: { [key: string]: React.CSSProperties } = {
        homeDiv: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background: 'linear-gradient(to bottom right, #191970, #4B0082)', 
            overflow: 'hidden', 
        },
        characterDiv: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            margin: 0, 
            padding: 0, 
        },
        characterImg: {
            maxHeight: '80%',
            maxWidth: '80%',
        },
        speechButton: {
            position: 'absolute' as 'absolute',
            top: '2em',
            left: '50%',
            transform: isHovered ? 'translate(-50%, 0) scale(1.05)' : 'translate(-50%, 0)',
            backgroundColor: isHovered ? '#ffcc00' : '#f1c40f',
            padding: '10px 20px',
            borderRadius: '15px',
            color: '#000',
            fontWeight: 'bold' as 'bold',
            boxShadow: isHovered ? '0 6px 12px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
            whiteSpace: 'nowrap' as 'nowrap',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '6.5rem',
            width: '20rem',
            lineHeight: 'normal',
            fontSize: '1.5rem',
            border: isHovered ? '3px solid black' : '2px solid black',
            transition: 'all 0.3s ease',
        },
        iconContainer: {
            position: 'absolute' as 'absolute',
            bottom: '1px',
            right: '5px',
        },
        icon: {
            height: '16px',
            width: 'auto',
        },
    };

    return (
        <div className="Home" style={styles.homeDiv}>
            <NavBar />
            <div className="character" style={styles.characterDiv}>
                <button 
                    onClick={handleButtonClick}
                    style={styles.speechButton}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <strong>{texts[currentIndex]}</strong>
                    <div style={styles.iconContainer}>
                        <AiOutlineArrowRight style={styles.icon}/>
                    </div>
                </button>
                <img src={images[currentIndex]} alt={`Icon ${currentIndex + 1}`} style={styles.characterImg} />
            </div>
        </div>
    );
}

export default Home;
