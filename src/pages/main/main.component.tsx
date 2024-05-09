import { printStatus, wsAddr } from 'constants/constants'
import { StatusComponent } from 'features/status'
import { useEffect } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket'

const MainComponent = () => {
    const Ender3S1Pro = useWebSocket(wsAddr, {
        onOpen: () => {
            console.log('WebSocket connection established.')
        },
        share: true,
        filter: () => false,
        retryOnError: true,
        shouldReconnect: () => true,
        onMessage: (data) => {
            if ('result' in JSON.parse(data.data)) {
                console.log(JSON.parse(data.data).result)
            }
        },
    })

    useEffect(() => {
        if (Ender3S1Pro.readyState === ReadyState.OPEN) {
            Ender3S1Pro.sendJsonMessage(printStatus)
        }
    }, [Ender3S1Pro.sendJsonMessage, Ender3S1Pro.readyState])

    return (
        <>
            <StatusComponent name="Ender 3 S1 PRO" />
        </>
    )
}

export default MainComponent
