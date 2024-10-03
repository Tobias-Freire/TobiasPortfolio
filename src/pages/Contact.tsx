import NavBar from "../components/NavBar";

function Contact() {
    return(
        <div className="Contact" style={styles.contactDiv}>
            <NavBar></NavBar>
        </div>
    );
}

const styles = {
    contactDiv: {
        height: '100vh',
        display: 'flex' as 'flex',
        flexDirection: 'column' as 'column',
        background: 'linear-gradient(to bottom right, #191970, #4B0082)', // Gradiente roxo
        overflow: 'hidden', // Adicione isso para evitar rolagem
    },
};

export default Contact;