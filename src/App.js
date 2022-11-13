import { useState } from 'react';

import Team from './components/Team';
import manU from '../src/asset/img/man-u.png'
import chelsea from '../src/asset/img/chelsea.png'
import shoot from '../src/asset/audio/shoot.wav'
import goal from '../src/asset/audio/goal.wav'


import './App.css';

function App() {

  const sport = [
    {
      id: 1,
      name: 'Man u',
      logo: manU,
      shotsTaken: 0,
      score: 0,
      versus : true
    },
    {
      id: 2,
      name: 'Chelsea',
      logo: chelsea,
      shotsTaken: 0,
      score: 0,
      versus : false
    },
  ]

  const [game, setGame] = useState(sport)

  const kickball = new Audio(shoot);
  const goalScored = new Audio(goal);


  const handleShoot = (id) => {
    let score = game.map((shot) => {
      if (shot.id === id) {
        if (Math.floor(Math.random(shot.shotsTaken) * 10) === 5) {
          goalScored.play()
          return { ...shot, score: shot.score + 1, shotsTaken: shot.shotsTaken + 1 }
        }
        return {
          ...shot, shotsTaken: shot.shotsTaken + 1
        }
      } else {
        return shot
      }
    })
    kickball.play()
    return setGame(score)
  }



  return (
    <div className="app">
      <h1>Welcome to the sports game starter</h1>
      <div className="flex">
        {
          game.map((club) => <Team key={club.id} club={club} handleShoot={handleShoot} />)
        }

      </div>
    </div>
  );
}

export default App;
