import React, { useEffect, useState } from 'react'
import StarShipCard from './StarShipCard';
import '../services/sw-api.js';
import getAllStarShips from '../services/sw-api.js';

export default function Starships() {
    
    const [ships, setShips] = useState([]);

    const getShips = async () => {
        await getAllStarShips().then(data => setShips(data));
    }

    useEffect(() => {
        getShips();
    }, []);

    const loaded = () => {
        console.log(ships);
        return (
            <div className='ships-container'>
                {ships.map((ship) => {
                    return (
                        <StarShipCard
                            name={ship.name}
                            model={ship.model}
                            manufacturer={ship.manufacturer}
                            cost_in_credits={ship.cost_in_credits}
                            length={ship.length}
                            starship_class={ship.starship_class}

                        />
                    );
                })}
            </div>
        );
    };

    const loading = () => {
        return (
            <h1>Loading</h1>
        )
    };

    return ships ? loaded() : loading();
}
