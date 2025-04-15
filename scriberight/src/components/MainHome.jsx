import React from 'react'

import Navigation from './homeCompo/navigation.jsx'
import HeroPage from './homeCompo/HeroPage.jsx'
import IntroSec from './homeCompo/IntroSec.jsx'
import AdvSec from './homeCompo/AdvSec.jsx'
import SwipprSec from './homeCompo/SwipprSec.jsx'
import HelpSec from './homeCompo/HelpSec.jsx'

function MainHome() {
    return (
        <div>
            <Navigation />
            <HeroPage />
            <IntroSec />
            <AdvSec />
            <SwipprSec />
            <HelpSec />
        </div>
    )
}


export default MainHome