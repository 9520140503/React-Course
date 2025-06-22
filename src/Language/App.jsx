import React, { useState } from 'react'
import { LanguageModeProvider } from './Context/Language'
import Switcher from './Components/Switcher'

function App() {

  const [language,setLanguage] = useState("en")

  function en() {
    setLanguage("English")
  }
  function hindi(){
    setLanguage("hindi")
  }

  return (
    <LanguageModeProvider value={{language,en,hindi}}>
        <Switcher/>
    </LanguageModeProvider>
  )
}

export default App