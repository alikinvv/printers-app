import { ColorEnum } from 'enums'
import './button.component.scss'
import classNames from 'classnames'

interface IComponentProps {
    children: React.ReactNode
    onClick?: () => void
    variant?: ColorEnum
}

export const ButtonComponent = (props: IComponentProps) => {
    const { children, variant = ColorEnum.BLUE, onClick } = props
    return (
        <div
            className={classNames('button-component', variant)}
            {...{ onClick }}
        >
            {children}
        </div>
    )
}
