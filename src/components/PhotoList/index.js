import React from 'react'

// Components
import { PhotoCard } from '../PhotoCard'

export const PhotoList = function () {
    return (
        <ul>
            {[1, 2, 3].map(id => <PhotoCard key={id}/>)}
        </ul>
    )
}