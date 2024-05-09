import { StatusComponent } from 'features'

import './status-list.component.scss'
import { IPrinterStatus } from './interfaces/status-list.interface'
import { WebSocketHook } from 'react-use-websocket/dist/lib/types'
import { useEffect, useState } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import { printStatus, wsAddr } from 'constants/constants'

interface IComponentProps {}

export const StatusListComponent = (props: IComponentProps) => {
    const [ender3S1Pro, setEnder3S1Pro] = useState<IPrinterStatus>({
        name: 'Ender 3 S1 PRO',
        status: 'printing',
    })

    const ender3S1ProSocket: WebSocketHook<unknown, MessageEvent<any> | null> =
        useWebSocket(wsAddr, {
            onOpen: () => {
                console.log('WebSocket connection established.')
            },
            share: true,
            filter: () => false,
            retryOnError: true,
            shouldReconnect: () => true,
            onMessage: (data) => {
                ender3S1ProSocket.sendJsonMessage(printStatus)
                const response = JSON.parse(data.data)
                if ('result' in response) {
                    if ('status' in response.result) {
                        console.log(response)

                        setEnder3S1Pro({
                            ...ender3S1Pro,
                            status: response.result.status.print_stats.state,
                        })
                    }
                }
            },
        })

    // useEffect(() => {
    //     if (ender3S1ProSocket.readyState === ReadyState.OPEN) {
    //         ender3S1ProSocket.sendJsonMessage(printStatus)
    //     }
    // }, [ender3S1ProSocket.sendJsonMessage, ender3S1ProSocket.readyState])

    return (
        <div className="status-list-component">
            <StatusComponent
                name={ender3S1Pro.name}
                status={ender3S1Pro.status}
            />
        </div>
    )
}
