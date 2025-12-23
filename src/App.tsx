import { useState } from 'react'

import './App.css'
import PlayerCard from "./components/PlayerCard.tsx";
import GameBoard from "./components/GameBoard.tsx";

type PlayerRole = 'Santa_FE' | 'Grinch_BE' | null;

function App() {
  const [role, setRole] = useState<PlayerRole>(null);

  if (!role) {
    return (
        <>
          <div>
            <PlayerCard
                title="Santa FE"
                description="Santa FE is a frontend developer who likes the colorful world of frontend development."
                style={{
                  backgroundColor: '#572c29',
                  color: '#3b0507'
                }}
                onSelect={() => setRole('Santa_FE')}
            />
            <PlayerCard
                title="Grinch BE"
                description="Grinch BE is a backend developer who loves the logic world of backend development."
                style={{
                  backgroundColor: '#051f06',
                  color: '#4d784f'
                }}
                onSelect={() => setRole('Grinch_BE')}
            />
          </div>
        </>
    )
  }

  return (
      <>
      <GameBoard />
      </>
  )
}

export default App
