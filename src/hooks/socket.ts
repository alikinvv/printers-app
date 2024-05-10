import useWebSocket from 'react-use-websocket'

interface ISocketProps {
    addr: string
    callback: (data: any) => void
}

export const useSocket = (props: ISocketProps) =>
    useWebSocket(props.addr, {
        onOpen: () => {
            console.log('WebSocket connection established.')
        },
        share: true,
        filter: () => false,
        retryOnError: true,
        shouldReconnect: () => true,
        onMessage: (data) => props.callback(data),
    })
