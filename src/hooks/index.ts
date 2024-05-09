import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { store } from 'store'
import { useNavigate, useLocation } from 'react-router-dom'
import { FC, useEffect, useRef, useState } from 'react'
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useApp = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    return { dispatch, navigate, location }
}

interface IUseWsProps {
    url: string
}

export const useWs = (props: IUseWsProps) => {
    const [isReady, setIsReady] = useState<boolean>(false)
    const [val, setVal] = useState(null)

    const ws = useRef(null)

    useEffect(() => {
        const socket = new WebSocket(props.url)

        socket.onopen = () => setIsReady(true)
        socket.onclose = () => setIsReady(false)
        socket.onmessage = (event) => setVal(event.data)

        // @ts-ignore
        ws.current = socket

        return () => {
            socket.close()
        }
    }, [])

    // bind is needed to make sure `send` references correct `this`
    // @ts-ignore
    return [isReady, val, ws.current?.send.bind(ws.current)]
}
