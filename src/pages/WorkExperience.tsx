import NavBar from "../components/NavBar";

function WorkExperience() {
    return(
        <div className="WorkExperience" style={styles.workExpDiv}>
            <NavBar></NavBar>
        </div>
    );
}

const styles = {
    workExpDiv: {
        height: '100vh',
        display: 'flex' as 'flex',
        flexDirection: 'column' as 'column',
        background: 'linear-gradient(to bottom right, #191970, #4B0082)', // Gradiente roxo
        overflow: 'hidden', // Adicione isso para evitar rolagem
    },
};

export default WorkExperience;