import classNames from 'classnames'
import './badge.component.scss'
import { ColorEnum } from 'enums'

interface IComponentProps {
    text: string
    variant?: ColorEnum
}

export const BadgeComponent = (props: IComponentProps) => {
    const { text, variant = ColorEnum.BLUE } = props

    return <div className={classNames('badge-component', variant)}>{text}</div>
}
