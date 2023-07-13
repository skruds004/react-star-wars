import React from 'react'

export default function StarShipCard(ship) {
  return (
    <div className='starship-card'>
        <h1>{ship.name}</h1>
        <h2>{ship.model}</h2>
        <p>This {ship.starship_class} class ship was manufactured by {ship.manufacturer}</p>
        <p>It is {ship.length} space units long and will cost you about {ship.cost_in_credits} credits</p>
    </div>
  )
}
