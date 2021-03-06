import React from 'react'
//imports for the performance optimisation - React.memo, useCallback, useMemo, caching results i.e, memoising, optimisations add their own cost but react in general is fast by default.
import Setup from './tutorial/12-memo-useMemo-useCallback/setup'
import Final from './tutorial/12-memo-useMemo-useCallback/final'

//below are the imports for the react-router which is super important in react.
// import Setup from './tutorial/11-react-router/setup'
// import Final from './tutorial/11-react-router/final'

//below are teh imports for the prop-types which are super important in react.
// import Setup from './tutorial/10-prop-types/setup'
// import Final from './tutorial/10-prop-types/final'

//below are the imports for the context api
// import Setup from './tutorial/9-custom-hooks/setup/1-fetch-example'
// import Final from './tutorial/9-custom-hooks/final/1-fetch-example'

//below are the imports for the context api 
// import Setup from './tutorial/8-useContext/setup/1-context-api'
// import Final from './tutorial/8-useContext/final/1-context-api'

//below are the imports for prop drilling
// import Setup from './tutorial/7-prop-drilling/setup/1-prop-drilling'
// import Final from './tutorial/7-prop-drilling/final/1-prop-drilling'

//below are the imports for the useReducer - no need to specify index its a default one
// import Setup from './tutorial/6-useReducer/setup'
// import Final from './tutorial/6-useReducer/final'
//below are the imports for the useRef
// import Setup from './tutorial/5-useRef/setup/1-useRef-basics'
// import Final from './tutorial/5-useRef/final/1-useRef-basics'

//below are the imports for the forms
// import Setup from './tutorial/4-forms/setup/2-multiple-inputs'
// import Final from './tutorial/4-forms/final/2-multiple-inputs'

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