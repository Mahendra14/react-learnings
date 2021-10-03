import React from 'react'

//below are imports for useEffect
import Setup from './tutorial/2-useEffect/setup/2-useEffect-cleanup'
import Final from './tutorial/2-useEffect/final/2-useEffect-cleanup'

//below are imports for useState
// import Setup from './tutorial/1-useState/setup/5-useState-counter'
// import Final from './tutorial/1-useState/final/5-useState-counter'
function App() {
  return (
    <div className='container'>
      <Setup/>
      <Final/>
    </div>
  )
}

export default App

//THING TO NOTE WHEN COMPARING ARRAYS JUST JUST COMPARE THE LENGHT IS 0 OR NOT ONLY WAY TO DO IT.