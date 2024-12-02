import '../page-styles/Home.css';
import AboutMeCard from '../components/AboutMeCard';
import ContactCard from '../components/ContactCard';
import HabilitiesCard from '../components/HabilitiesCard';
import TimeLine from '../components/TimeLine';
import ExperienceTitleCard from '../components/ExperienceTitleCard';

function Home() {

    const experiences = [
        {
          company: "LUMO Laboratory",
          position: "Voluntary frontend developer",
          startDate: "apr 2024",
          endDate: "dez 2024",
          description: "I helped develop a web application called SisEnex, which is used for managing the presentations of projects of research, monitoring and extension. Lumo is a laboratory from the university I study.",
          skills: ["React", "TypeScript", "CSS", "GraphQL", "PostgreSQL"],
        },
        {
          company: "INOVATEC-JP",
          position: "Software development intern",
          startDate: "Jun 2024",
          endDate: "Until now",
          description: "I have been developing web applications primarily using Oracle Apex, Oracle Database, and PL/SQL. I also frequently use JavaScript for specific functionalities and occasionally Java.",
          skills: ["Oracle Apex", "Oracle database", "PL/SQL", "JavaScript", "Java", "Maven"],
        },
      ];

    return (
        <div className="home-container">
            <div className="vertical-cards">
                <AboutMeCard />
                <ContactCard />
            </div>
            <HabilitiesCard />
            <div className='experience-container'>
              <ExperienceTitleCard/>
              <TimeLine experiences={experiences}/>
            </div>
        </div>
    );
}

export default Home;
