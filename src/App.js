import React from 'react'



//below are the imports for the forms
import Setup from './tutorial/4-forms/setup/1-controlled-inputs'
import Final from './tutorial/4-forms/final/1-controlled-inputs'

//below are imports for the conditional rendering
// import Setup from './tutorial/3-conditional-rendering/setup/3-show-hide'
// import Final from './tutorial/3-conditional-rendering/final/3-show-hide'

//below are imports for useEffect
// import Setup from './tutorial/2-useEffect/setup/3-useEffect-fetch-data'
// import Final from './tutorial/2-useEffect/final/3-useEffect-fetch-data'

//below are imports for useState
// import Setup from './tutorial/1-useState/setup/5-useState-counter'
// import Final from './tutorial/1-useState/final/5-useState-counter'
function App() {
  return (
    <div className='container'>
      <Setup/>
      {/* <Final/> */}
    </div>
  )
}

export default App

//THING TO NOTE WHEN COMPARING ARRAYS JUST JUST COMPARE THE LENGHT IS 0 OR NOT ONLY WAY TO DO IT.