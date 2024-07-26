import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import HeroBottom from './heroBottom.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <HeroBottom />
    
  </React.StrictMode>,
)
