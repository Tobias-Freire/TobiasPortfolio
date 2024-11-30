import '../page-styles/Home.css';
import AboutMeCard from '../components/AboutMeCard';
import ContactCard from '../components/ContactCard';

function Home() {

    return (
        <div className="Home">
            <AboutMeCard></AboutMeCard>
            <ContactCard></ContactCard>
        </div>
    );
}

export default Home;
