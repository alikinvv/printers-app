import { printStatus, wsAddr } from 'constants/constants'
import { useEffect } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import { StatusListComponent } from 'widgets'

import './main.component.scss'
import { WebSocketHook } from 'react-use-websocket/dist/lib/types'

const MainComponent = () => {
    return (
        <div className="main-component">
            <StatusListComponent />
        </div>
    )
}

export default MainComponent
