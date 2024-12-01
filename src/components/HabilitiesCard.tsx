import '../component-styles/HabilitiesCard.css';

function HabilitiesCard() {
    const habilities = [
        { src: './habilities-icons/java.png', name: 'Java' },
        { src: './habilities-icons/oracle.png', name: 'Oracle' },
        { src: './habilities-icons/spring.png', name: 'Spring and Spring Boot' },
        { src: './habilities-icons/typescript.png', name: 'TypeScript (and JavaScript)' },
        { src: './habilities-icons/react.png', name: 'React' },
        { src: './habilities-icons/nextjs-icon.png', name: 'Next' },
        { src: './habilities-icons/python.png', name: 'Python' },
        { src: './habilities-icons/git.png', name: 'Git' },
        { src: './habilities-icons/github.png', name: 'GitHub' },
        { src: './habilities-icons/postgres.png', name: 'Postgres' },
        { src: './habilities-icons/agile.png', name: 'Agile Methodology (mainly Scrum)' },
        { src: './habilities-icons/linux.png', name: 'Linux' },
    ];

    const qualities = [
        'Teamwork',
        'Problem-solving',
        'Adaptability',
        'Creativity',
        'Attention to detail',
        'Hardworking',
        'Communication',
        'Modesty, of course'
    ];

    return (
        <div className="hability-card-conteiner">
            <div className="hability-title">
                <span><b>Habilities</b></span>
            </div>
            <div className="hability-icons">
                {habilities.map((hability, index) => (
                    <div key={index} className="hability-icon">
                        <img src={hability.src} alt={hability.name} />
                        <div className="tooltip">{hability.name}</div>
                    </div>
                ))}
            </div>
            <hr className="divider" />
            <div className="qualities-section">
                <h3>Qualities</h3>
                <ul>
                    {qualities.map((quality, index) => (
                        <li key={index}>{quality}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default HabilitiesCard;
