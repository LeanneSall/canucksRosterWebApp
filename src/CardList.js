import React from 'react';
import Card from './Card';


const CardList = ({Players}) => {
    const cardComponent = Players.map((user, i) => {
        return <Card key={i} id={Players[i].id} name={Players[i].name} position={Players[i].position} />
    })
    return (
        <div>
            {cardComponent}
        </div>
        
        
    );
}

export default CardList;