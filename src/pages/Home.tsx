import { useState } from "react";
import NavBar from "../components/NavBar";

function Home() {
    const images = ['myIcon1.png', 'myIcon2.png', 'myIcon3.png'];
    const texts = [
        'Hire me pleaseeee :(', 
        'Wait, you want to hire me?', 
        <span>See <a href="/contact" style={{ color: 'black' }}>my contacts</a> :D</span>
    ];
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const handleClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="Home" style={styles.homeDiv}>
            <NavBar />
            <div className="character" style={styles.characterDiv}>
                <button onClick={handleClick} style={styles.speechBubble}>
                    <strong>{texts[currentIndex]}</strong>
                </button>
                <img src={images[currentIndex]} alt="icon" style={styles.characterImg} />
            </div>
        </div>
    );
}


const styles = {
    homeDiv: {
        height: '100vh',
        display: 'flex' as 'flex',
        flexDirection: 'column' as 'column',
        background: 'linear-gradient(to bottom right, #191970, #4B0082)', 
        overflow: 'hidden', 
    },
    characterDiv: {
        flex: 1,
        display: 'flex' as 'flex',
        alignItems: 'center' as 'center',
        justifyContent: 'center' as 'center',
        position: 'relative' as 'relative',
        margin: 0, 
        padding: 0, 
    },
    characterImg: {
        height: 'auto',
        width: 'auto',
    },
    speechBubble: {
        position: 'absolute' as 'absolute',
        top: '2em',
        bottom: '59px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: '#f1c40f',
        padding: '10px 20px',
        borderRadius: '15px',
        color: '#000',
        fontWeight: 'bold' as 'bold',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        whiteSpace: 'nowrap' as 'nowrap',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '5rem',
        width: '20rem',
        lineHeight: 'normal',
        fontSize: '1.5rem',
    } as React.CSSProperties,
    link: {
        color: 'black',
    } as React.CSSProperties,
};


export default Home;
