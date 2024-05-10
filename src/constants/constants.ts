export const refreshTimeout: number = 5000
export const ender3S1Address: string = 'ws://192.168.0.20/websocket'
export const kp3sProNum1Address: string = 'ws://192.168.0.5/websocket'
export const kp3sProNum2Address: string = 'ws://192.168.0.6/websocket'

export const printStatus = {
    jsonrpc: '2.0',
    method: 'printer.objects.query',
    params: {
        objects: {
            webhooks: null,
            virtual_sdcard: null,
            print_stats: null,
        },
    },
    id: 5664,
}
