import React from 'react'

const Team = ({ club, handleShoot }) => {

    const { name, logo, shotsTaken, score, id, versus } = club

    return (
        <>
            <div className='team'>
                <h4>Team name : {name}</h4>
                <div className="img">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="info">
                    <button onClick={() => handleShoot(id)} >Shoot</button>
                    <ul>
                        <li>Shots : {shotsTaken}</li>
                        <li>Score : {score}</li>
                        <li>no shots </li>
                    </ul>
                </div>

            </div>
            <div className='versus'>
                {versus && <h3>Versus</h3>}
            </div>
        </>
    )
}

export default Team