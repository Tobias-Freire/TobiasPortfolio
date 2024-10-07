import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CSSProperties } from "react";

const getStyles = (isHovered: boolean, windowWidth: number) => {
    return {
        homeDiv: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            background: 'linear-gradient(to bottom right, #191970, #4B0082)',
            overflow: 'hidden',
        } as CSSProperties,
        characterDiv: {
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            margin: 0,
            padding: 0,
        } as CSSProperties,
        characterImg: {
            maxHeight: windowWidth < 768 ? '40vh' : '50vh',
            maxWidth: windowWidth < 768 ? '60vw' : '50vw',
        } as CSSProperties,
        speechButton: {
            position: 'absolute',
            top: '2em',
            left: '50%',
            transform: isHovered ? 'translate(-50%, 0) scale(1.05)' : 'translate(-50%, 0)',
            backgroundColor: isHovered ? '#ffcc00' : '#f1c40f',
            padding: windowWidth < 480 ? '5px 10px' : windowWidth < 768 ? '6px 12px' : '8px 15px',
            borderRadius: '15px',
            color: '#000',
            fontWeight: 'bold',
            boxShadow: isHovered ? '0 6px 12px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: windowWidth < 480 ? '3.5rem' : windowWidth < 768 ? '4rem' : '5rem',
            width: windowWidth < 480 ? '12rem' : windowWidth < 768 ? '14rem' : '18rem',
            lineHeight: 'normal',
            fontSize: windowWidth < 480 ? '0.9rem' : windowWidth < 768 ? '1rem' : '1.2rem',
            border: isHovered ? '3px solid black' : '2px solid black',
            transition: 'all 0.3s ease',
        } as CSSProperties,
        iconContainer: {
            position: 'absolute',
            bottom: '1px',
            right: '5px',
        } as CSSProperties,
        icon: {
            height: '15px',
            width: 'auto',
        } as CSSProperties,
    };
};

function Home() {
    const [isHovered, setHovered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const images = ['myIcon1.png', 'myIcon2.png', 'myIcon3.png'];
    const texts = [
        'Hire me pleaseee :(', 
        'Wait, you want to hire me?', 
        <span>See <a href="/contact" style={{ color: 'black' }}>my contacts</a> :D</span>
    ];

    const navigate = useNavigate();

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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

    const styles = getStyles(isHovered, windowWidth);

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
