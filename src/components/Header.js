import React, {useState} from 'react'


function Header({onDarkModeClick}){
  const [isDarkMode, setDarkMode] = useState(false)

  function changeMode(){
    onDarkModeClick()
    setDarkMode(mode => !mode)
  }
  return (
    (
    <header>
        <h2>Shopster</h2>
        <button onClick={changeMode}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
    </header>
    )
  )
}

export default Header