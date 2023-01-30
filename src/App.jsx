import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header/Header'
import Menu from './Menu/Menu'
import OurMenu from './OurMenu/OurMenu'
import Category from './Category/Category'
import Show from './Show/Show'

function App() {
  const [count, setCount] = useState(0)

  return(
    
    <div className="general">
      <div className="header">
        <Header />
      </div>
      <div className="menu">
        <Menu />
      </div>
      <div className="ourmenu">
        <OurMenu />
      </div>
      <div className="category">
        <Category />
      </div>
      <div className="show">
        <Show />
      </div>
      
    </div>
  )
 
}

export default App
