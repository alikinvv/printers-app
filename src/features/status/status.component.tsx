import { BadgeComponent } from 'shared'
import './status.component.scss'
import { IPrinterStatus } from 'widgets'
import { useSocket } from 'hooks'
import { useEffect, useState } from 'react'
import { ReadyState } from 'react-use-websocket'
import { refreshTimeout, printStatus } from 'constants/constants'
import { getBadgeVariant } from './utils'

interface IComponentInterface {
    printer: IPrinterStatus
}

export const StatusComponent = (props: IComponentInterface) => {
    const [printer, setPrinter] = useState<IPrinterStatus>(props.printer)

    const socket = useSocket({
        addr: printer.wsAddr,
        callback: (data) => {
            const response = JSON.parse(data.data)
            if ('result' in response) {
                if ('status' in response.result) {
                    const printStats = response.result.status.print_stats
                    console.log(response.result)

                    setPrinter({
                        ...printer,
                        status: printStats.state,
                        fileName: printStats.filename,
                        filamentUsed: Math.round(printStats.filament_used),
                    })
                }
            }
        },
    })

    useEffect(() => {
        if (socket.readyState === ReadyState.OPEN) {
            setInterval(
                () => socket.sendJsonMessage(printStatus),
                refreshTimeout,
            )
        }
    }, [socket.sendJsonMessage, socket.readyState])

    return (
        <div className="status-component">
            <div className="status-top-bar">
                <div className="status-title">{printer.name}</div>
                <BadgeComponent
                    text={printer.status}
                    variant={getBadgeVariant(printer.status)}
                />
            </div>
            <div className="status-list">
                <div>
                    <span>File Name:</span> {printer.fileName}
                </div>
                <div>
                    <span>Filament Used:</span> {printer.filamentUsed}
                </div>
            </div>
        </div>
    )
}
