import "./TeamCard.css";

export default function TeamCard({name, role, bio, imageUrl, isPresent}){
return (
    
        <article className={`team-card ${isPresent ? "team-card online" : "team-card offline" }`}>

            <div className="img-container">
                <img src={imageUrl} alt={`foto di ${name}`} className="team-img" />
                </div>

            <div className = "info-card"> 
                <h3>{name}</h3>
                <h4>{role}</h4>
                <p>{bio}</p>
            </div>
            <button className="stato-btn">
                {isPresent ? "PRESENTE✅" : "ASSENTE❌"}</button>
        </article>


)   

}

