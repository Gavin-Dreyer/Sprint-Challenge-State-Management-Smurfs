import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchSmurf, postSmurf, resetData } from '../actions'

import IndividualSmurf from './IndividualSmurf'
import SmurfForm from './SmurfForm'

const Smurfs = props => {
    

    useEffect(() => {
        props.fetchSmurf()
    }, [props.isPosting])

    if (props.isFetching) {
        return <h2>Loading...</h2>;
    }



    console.log(props.smurfs)
        
    return (
        <div>
            {props.smurfs.map(item => (
                <IndividualSmurf key={item.id} name={item.name} height={item.height} age={item.age} />
            ))}
            <SmurfForm postSmurf={props.postSmurf} />
            <button onClick={e => resetData(e)}>RESET DATA</button>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        isPosting: state.isPosting,
        error: state.error
    }
}


export default connect(
    mapStatetoProps,
    { fetchSmurf, postSmurf, resetData }
)(Smurfs)
