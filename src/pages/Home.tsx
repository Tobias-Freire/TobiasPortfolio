import NavBar from "../components/NavBar";

function Home() {
    return (
        <div className="Home" style={styles.homeDiv}>
            <NavBar />
            <div className="character" style={styles.characterDiv}>
                <img src="myIcon.png" alt="icon" style={styles.characterImg} />
                <div style={styles.speechBubble}>
                    <a href="/contact" style={styles.link}>HIRE ME</a> &nbsp; PLEASEEE :D
                </div>
            </div>
        </div>
    );
}

const styles = {
    homeDiv: {
        height: '100vh',
        display: 'flex' as 'flex',
        flexDirection: 'column' as 'column',
        background: 'linear-gradient(to bottom right, #191970, #4B0082)', // Gradiente roxo
        overflow: 'hidden', // Adicione isso para evitar rolagem
    },
    characterDiv: {
        flex: 1,
        display: 'flex' as 'flex',
        alignItems: 'center' as 'center',
        justifyContent: 'center' as 'center',
        position: 'relative' as 'relative',
        margin: 0, // Certifique-se de que não há margens
        padding: 0, // Certifique-se de que não há preenchimentos
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
