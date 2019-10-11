import React from 'react'

const IndividualSmurf = props => {
    return (
        <div className='smurf'>
            <span>{props.name}</span>
            <span>{props.age}</span>
            <span>{props.height}</span>
        </div>
    )
}

export default IndividualSmurf