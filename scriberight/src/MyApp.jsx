// import { useState } from 'react'
// import './App.css'
import './MyCss.css'
import Navigation from './components/homeCompo/navigation.jsx'
import HeroPage from './components/homeCompo/HeroPage.jsx'
import IntroSec from './components/homeCompo/IntroSec.jsx'
import AdvSec from './components/homeCompo/AdvSec.jsx'
import SwipprSec from './components/homeCompo/SwipprSec.jsx'
import HelpSec from './components/homeCompo/HelpSec.jsx'

import MainHome from './components/MainHome.jsx'
import Maindash from './components/dashCompo/Maindash.jsx'
// testing
import Tryr1 from './components/dashCompo/Tryr1.jsx'
import PracticeApp from './practiceRoute/practiceApp.jsx'
import { BrowserRouter } from 'react-router-dom'
function MyApp() {
  return (
    <div>
      {/* <MainHome/> */}
      <Maindash/>
      {/* <Tryr1/> */}
      {/* <BrowserRouter> */}
      {/* <PracticeApp/> */}
      {/* </BrowserRouter> */}
    </div>
  )
}

export default MyApp
