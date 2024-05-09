import classNames from 'classnames'
import './badge.component.scss'
import { BadgeEnum } from './enums/badge.enum'

interface IComponentProps {
    text: string
    variant?: BadgeEnum
}

export const BadgeComponent = (props: IComponentProps) => {
    const { text, variant = BadgeEnum.BLUE } = props

    return <div className={classNames('badge-component', variant)}>{text}</div>
}
