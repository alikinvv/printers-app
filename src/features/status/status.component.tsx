import { BadgeComponent } from 'shared'
import './status.component.scss'
import { IPrinterStatus } from 'widgets'
import { useAppDispatch, useSocket } from 'hooks'
import { useEffect, useState } from 'react'
import { ReadyState } from 'react-use-websocket'
import { refreshTimeout } from 'constants/constants'
import { getBadgeVariant } from './utils'
import { filesList, printStatus } from 'services'
import { setFileList } from 'store'

interface IComponentInterface {
    printer: IPrinterStatus
}

export const StatusComponent = (props: IComponentInterface) => {
    const dispatch = useAppDispatch()
    const [printer, setPrinter] = useState<IPrinterStatus>(props.printer)

    const socket = useSocket({
        addr: printer.wsAddr,
        callback: (data) => {
            console.log(data)
            const response = JSON.parse(data.data)
            if ('result' in response) {
                const result = response.result
                console.log(result)

                if ('status' in result) {
                    const printStats = result.status.print_stats
                    setPrinter({
                        ...printer,
                        status: printStats.state,
                        fileName: printStats.filename,
                        filamentUsed: Math.round(printStats.filament_used),
                    })
                }

                if (!!result.length && 'path' in result[0]) {
                    dispatch(
                        setFileList({
                            printer: props.printer.name,
                            files: result,
                        }),
                    )
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

            socket.sendJsonMessage(filesList)
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
