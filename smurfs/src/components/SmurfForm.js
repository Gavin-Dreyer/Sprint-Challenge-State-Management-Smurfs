import React, { useState } from 'react'
// import axios from 'axios'

const SmurfForm = props => {
    const [text, setText] = useState({
        name: '',
        age: '',
        height: ''
    })

    const handleChanges = e => {
        let value = e.target.value
        if (e.target.name === 'age') {
            value = Number(value);
          }
        setText({...text, [e.target.name]: value})
    }

    // const postSmurf = (e, item) => {
    //     e.preventDefault()
    //     axios
    //         .post('http://localhost:3333/smurfs', item)
    //         .then(res => console.log(res))
    //         .catch(res => console.log(res))
    // }

    const handleSubmit = () => {
        props.postSmurf(text)
        setText({
            name: '',
            age: '',
            height: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            name='name'
            value={text.name}
            onChange={(e) => handleChanges(e)}
            />
            <input 
            type='number'
            name='age'
            value={text.age}
            onChange={(e) => handleChanges(e)}
            />
            <input 
            type='text'
            name='height'
            value={text.height}
            onChange={(e) => handleChanges(e)}
            />
            <button>Submit!</button>
        </form>
    )
}

export default SmurfForm