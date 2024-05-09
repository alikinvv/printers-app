export const wsAddr = 'ws://192.168.0.20/websocket'

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
