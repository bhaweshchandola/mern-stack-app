import React from 'react'

export default function CheckHero({heroName}) {
    if(heroName == 'Joker'){
        throw new Error('Not a hero')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}
