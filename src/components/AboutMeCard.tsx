import '../component-styles/AboutMeCard.css';

function AboutMeCard() {
    return (
        <div className="card-conteiner">
            <h2 className="text">About Me</h2>
            <div className="rounded-cropped">
                <img src="./me.jpeg" alt="me" />
            </div>
            <div className="icon-group">
                <img src="./brazil.png" alt="brazil flag" className="icon" />
                <img src="./paraiba.png" alt="paraiba flag" className="icon" />
                <img src="./UFPB-Brasao.png" alt="UFPB logo" className="icon" />
            </div>
            <div className='about-me-text'>
                <span>
                    Hello, People! My name is Tobias Freire. I am a Computer Science student at 
                    Federal University of Paraíba (UFPB), currently in my fourth semester. I'm Brazilian, 
                    proudly born and raised in the state of Paraíba. I got into the Information Technology 
                    field when I was around 17. Right now, I am 19 years old, and this area never ceases to 
                    amaze me while opening new opportunities for me to grow as a learner, professional,
                    and human being! My goal is to become a Software Engineer!
                </span>
            </div>
        </div>
    );
}

export default AboutMeCard;
