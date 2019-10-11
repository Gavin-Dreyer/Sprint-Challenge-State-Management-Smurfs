import React from 'react'

const IndividualSmurf = props => {
    return (
        <div className='smurf'>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.height}</p>
        </div>
    )
}

export default IndividualSmurf