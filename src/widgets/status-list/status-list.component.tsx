import { StatusComponent } from 'features'
import { IPrinterStatus } from './interfaces/status-list.interface'
import {
    ender3S1Address,
    kp3sProNum1Address,
    kp3sProNum2Address,
} from 'constants/constants'

import './status-list.component.scss'
import { setProductList, useGetProductListQuery } from 'store'
import { useEffect } from 'react'
import { useAppDispatch } from 'hooks'

export const StatusListComponent = () => {
    const dispatch = useAppDispatch()
    const printers: IPrinterStatus[] = [
        {
            id: 1,
            name: 'Ender 3 S1 PRO',
            wsAddr: ender3S1Address,
            status: 'loading',
            fileName: 'loading',
            filamentUsed: 0,
        },
        {
            id: 2,
            name: 'KP3S PRO V2 #1',
            wsAddr: kp3sProNum1Address,
            status: 'loading',
            fileName: 'loading',
            filamentUsed: 0,
        },
        {
            id: 3,
            name: 'KP3S PRO V2 #2',
            wsAddr: kp3sProNum2Address,
            status: 'loading',
            fileName: 'loading',
            filamentUsed: 0,
        },
    ]

    const { data: products } = useGetProductListQuery()

    useEffect(() => {
        products && dispatch(setProductList(products))
    }, [products])

    return (
        <div className="status-list-component">
            {printers.map((printer) => (
                <StatusComponent key={printer.name} {...{ printer }} />
            ))}
        </div>
    )
}
