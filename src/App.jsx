import React, { useState } from 'react'
import StartMenu from './components/StartMenu'
import FormBuilder from './components/FormBuilder'

const App = () => {

  const [start, setStart] = useState(false)

  return (
   <>
   {start ? <FormBuilder /> : <StartMenu toggle={setStart} /> }
   </>
  )
}

export default App