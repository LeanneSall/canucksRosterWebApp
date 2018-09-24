import React from 'react';

const Card = ({name, position, id}) => {
    return (
        <div className = 'tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='Player' src= {`https://nhl.bamcontent.com/images/headshots/current/168x168/${id}.jpg`} />
            <div>
                <h2>{name}</h2>
                <p>{position}</p>
            </div>
        </div>
        );
    };
    
    export default Card;