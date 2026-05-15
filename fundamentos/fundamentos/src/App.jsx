import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import FirstComponent from './components/firtComponent'
//./ significa diretorio atual, entre na pasta componentes 
import { TemplateExpression } from './components/TemplateExpression'
import { MyComponents } from './components/MyComponents'
import { Events } from './components/Events'

function App() {
 

  return (
    <div className="App">
      <h1>Fundamentos do React</h1>
      <FirstComponent/>
      <TemplateExpression/>
      <Events/>
    </div>
  )
}

export default App
