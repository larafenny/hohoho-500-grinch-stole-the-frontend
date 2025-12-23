import { useState, useEffect } from 'react'

function GameLogic() {
  const [state, setState] = useState({ santa: 50, grinch: 20, cooldown: 0 });

  const tick = () => {
    const changeStrength = 2;
    const eps = 0.0001;  // to avoid division by zero
    const equilibriumThreshold = 0.1;
    const eventBoost = 100;
    const eventCooldownTicks = 30;

    setState(({ santa, grinch, cooldown }) => {
      const imbalance = (santa - grinch) / (santa + grinch + eps);  // relative imbalance between santa and grinch (always between -1 and 1, 0 means equilibrium)
      const delta = changeStrength * imbalance;  // change in strength of each player based on imbalance (positive for santa, negative for grinch)

      let newSanta = Math.max(0, santa - delta);
      let newGrinch = Math.max(0, grinch + delta);
      let newCooldown = Math.max(0, cooldown - 1);

      const nearEquilibrium = Math.abs(imbalance) < equilibriumThreshold;

      if (nearEquilibrium && newCooldown === 0) {
        const favorSanta = Math.random() < 0.5;

        if (favorSanta) {
          const variation = (Math.random() * 2 - 1) * eventBoost;
          newSanta = Math.max(0, newSanta + variation);
        } else {
          const variation = (Math.random() * 2 - 1) * eventBoost;
          newGrinch = Math.max(0, newGrinch + variation);
        }


        newCooldown = eventCooldownTicks;
      }

      return { santa: newSanta, grinch: newGrinch, cooldown: newCooldown };
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

export default GameLogic
