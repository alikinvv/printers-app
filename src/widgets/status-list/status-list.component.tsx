import { StatusComponent } from 'features'
import { IPrinterStatus } from './interfaces/status-list.interface'
import {
    ender3S1Address,
    kp3sProNum1Address,
    kp3sProNum2Address,
} from 'constants/constants'

import './status-list.component.scss'

export const StatusListComponent = () => {
    const printers: IPrinterStatus[] = [
        {
            name: 'Ender 3 S1 PRO',
            wsAddr: ender3S1Address,
            status: 'loading',
            fileName: 'loading',
            filamentUsed: 0,
        },
        {
            name: 'KP3S PRO V2 #1',
            wsAddr: kp3sProNum1Address,
            status: 'loading',
            fileName: 'loading',
            filamentUsed: 0,
        },
        {
            name: 'KP3S PRO V2 #2',
            wsAddr: kp3sProNum2Address,
            status: 'loading',
            fileName: 'loading',
            filamentUsed: 0,
        },
    ]

    return (
        <div className="status-list-component">
            {printers.map((printer) => (
                <StatusComponent key={printer.name} {...{ printer }} />
            ))}
        </div>
    )
}
