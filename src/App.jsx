import { useState } from 'react'
import './App.css'
import ShowCount from './components/ShowCount/ShowCount'
import Subtract from './components/SubtractButton/SubtractButton'
import Sum from './components/SumButton/SumButton'

function App() {
  const [clicks, setClicks] = useState(0);

  const handleSubtractClick = () => setClicks(click => click <= 0 ? 0 : click - 1);
  const handleSumClick = () => setClicks(click => click + 1);

  return (
    <>
      <ShowCount className="interactions-info" clicks={clicks} />
      <div className="buttons">
        <Subtract className="subtract-button" onClick={handleSubtractClick} />
        <Sum className="sum-button" onClick={handleSumClick} />
      </div>
    </>
  )
}

export default App