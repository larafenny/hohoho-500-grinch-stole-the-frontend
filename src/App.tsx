import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [santaFe, setSantaFe] = useState(0)
  const [grinchBe, setGrinchBe] = useState(0)
  const tick = () => {
    setSantaFe(prev => prev + 1)
    setGrinchBe(prev => prev - 1)
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <p>SantaFE: {santaFe}</p>
      <p>GrinchBe: {grinchBe}</p>
    </>
  )
}

export default App
