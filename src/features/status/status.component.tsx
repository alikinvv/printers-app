import { BadgeComponent } from 'shared'
import './status.component.scss'
import { BadgeEnum } from 'shared/badge/enums/badge.enum'

interface IComponentInterface {
    name: string
    status: string
}

export const StatusComponent = (props: IComponentInterface) => {
    const { name, status } = props

    const getBadgeVariant = (): BadgeEnum => {
        switch (status) {
            case 'printing':
                return BadgeEnum.BLUE
            case 'complete':
                return BadgeEnum.GREEN
            case 'standby':
                return BadgeEnum.YELLOW
            default:
                return BadgeEnum.BLUE
        }
    }

    return (
        <div className="status-component">
            <div className="status-top-bar">
                <div className="status-title">{name}</div>
                <BadgeComponent text={status} variant={getBadgeVariant()} />
            </div>
        </div>
    )
}
