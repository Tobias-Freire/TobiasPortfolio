import '../component-styles/HabilitiesCard.css';

function HabilitiesCard() {
    const habilities = [
        { src: './habilities-icons/java.png', name: 'Java', percentage: 80 },
        { src: './habilities-icons/oracle.png', name: 'Oracle', percentage: 80 },
        { src: './habilities-icons/spring.png', name: 'Spring and Spring Boot', percentage: 80 },
        { src: './habilities-icons/typescript.png', name: 'TypeScript (and JavaScript)', percentage: 82 },
        { src: './habilities-icons/react.png', name: 'React', percentage: 82 },
        { src: './habilities-icons/nextjs-icon.png', name: 'Next', percentage: 74 },
        { src: './habilities-icons/python.png', name: 'Python', percentage: 70 },
        { src: './habilities-icons/git.png', name: 'Git', percentage: 90 },
        { src: './habilities-icons/github.png', name: 'GitHub', percentage: 90 },
        { src: './habilities-icons/postgres.png', name: 'Postgres', percentage: 80 },
        { src: './habilities-icons/agile.png', name: 'Agile Methodology (mainly Scrum)', percentage: 93 },
        { src: './habilities-icons/linux.png', name: 'Linux', percentage: 95 },
    ];

    const qualities = [
        'Teamwork',
        'Problem-solving',
        'Adaptability',
        'Creative',
        'Attention to detail',
        'Hardworking',
        'Communication',
        'Perfectionism',
        'Think outside the box',
        'Responsible',
        'Reliable',
        'Proactive',
        'Helpful',
        'Modest, of course'
    ];

    return (
        <div className='hability-card-conteiner-wrapper'>
            <div className="hability-card-conteiner">
                <div className="hability-title">
                    <span><b>Skills</b></span>
                </div>
                <div className="hability-icons">
                    {habilities.map((hability, index) => (
                        <div key={index} className="hability-icon">
                            <img src={hability.src} alt={hability.name} />
                            <div className="tooltip">
                                {hability.name} <br></br>
                                <span className='expertise-label'>Expertise: {hability.percentage}%</span>
                                <div className="progress-bar">
                                    <div
                                        className="progress"
                                        style={{ width: `${hability.percentage}%` }}
                                    ></div>
                                </div>
                            </div>
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
        </div>
    );
}

export default HabilitiesCard;
