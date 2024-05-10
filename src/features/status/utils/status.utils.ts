import { ColorEnum } from 'enums'

export const getBadgeVariant = (status: string): ColorEnum => {
    switch (status) {
        case 'printing':
            return ColorEnum.BLUE
        case 'complete':
            return ColorEnum.GREEN
        case 'standby':
            return ColorEnum.YELLOW
        default:
            return ColorEnum.GRAY
    }
}
