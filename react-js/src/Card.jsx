import profilePic from './assets/victor.webp'

function Card() {

    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="pfp" />
            <h2 className="card-title">Victor</h2>
            <p className="card-text">I'm learning React JavaScript</p>
        </div>
    );
}

export default Card