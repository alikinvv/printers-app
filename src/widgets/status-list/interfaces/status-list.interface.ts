export interface IPrinterStatus extends IResponse {
    result: Result
}

interface Result {
    eventtime: number
    status: Status
}

interface Status {
    webhooks: Webhooks
    virtual_sdcard: Virtualsdcard
    print_stats: Printstats
}

interface Printstats {
    filename: string
    total_duration: number
    print_duration: number
    filament_used: number
    state: string
    message: string
    info: Info
}

interface Info {
    total_layer: null
    current_layer: null
}

interface Virtualsdcard {
    file_path: null
    progress: number
    is_active: boolean
    file_position: number
    file_size: number
}

interface Webhooks {
    state: string
    state_message: string
}
