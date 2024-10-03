import NavBar from '../components/NavBar';

function AboutMe() {
    return(
        <div className="About me" style={styles.aboutDiv}>
            <NavBar></NavBar>
        </div>
    );
}

const styles = {
    aboutDiv: {
        height: '100vh',
        display: 'flex' as 'flex',
        flexDirection: 'column' as 'column',
        background: 'linear-gradient(to bottom right, #191970, #4B0082)', // Gradiente roxo
        overflow: 'hidden', // Adicione isso para evitar rolagem
    },
};

export default AboutMe;