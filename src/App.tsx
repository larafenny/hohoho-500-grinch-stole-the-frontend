import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [state, setState] = useState({ santa: 50, grinch: 20 });

  const tick = () => {
    const changeStrength = 2;
    const eps = 0.0001;  // to avoid division by zero

    setState(({ santa, grinch }) => {
      const imbalance = (santa - grinch) / (santa + grinch + eps);
      const delta = changeStrength * imbalance;

      return {
        santa: Math.max(0, santa - delta),
        grinch: Math.max(0, grinch + delta),
      };
    });
  };

  useEffect(() => {
    const interval = setInterval(tick, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <p>SantaFE: {Math.round(state.santa)}</p>
      <p>GrinchBe: {Math.round(state.grinch)}</p>
    </>
  )
}

export default App
