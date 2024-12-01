import '../page-styles/Home.css';
import AboutMeCard from '../components/AboutMeCard';
import ContactCard from '../components/ContactCard';
import HabilitiesCard from '../components/HabilitiesCard';

function Home() {
    return (
        <div className="home-container">
            <div className="vertical-cards">
                <AboutMeCard />
                <ContactCard />
            </div>
            <HabilitiesCard />
        </div>
    );
}

export default Home;
