import { useState } from 'react'
import './App.css'
import ShowCount from './components/ShowCount/ShowCount'
import Subtract from './components/SubtractButton/SubtractButton'
import Sum from './components/SumButton/SumButton'

function App() {
  const [clicks, setClicks] = useState(0);

  return (
    <>
      <ShowCount className="interactions-info" clicks={clicks} />
      <div className="buttons">
        <Subtract className="subtract-button" onClick={() => setClicks(click => click <= 0 ? 0 : click - 1)} />
        <Sum className="sum-button" onClick={() => setClicks(click => click + 1)} />
      </div>
    </>
  )
}

export default App