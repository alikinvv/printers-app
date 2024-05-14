import { ColorEnum } from 'enums'
import './button.component.scss'
import classNames from 'classnames'
import { CheckIcon } from 'assets/icons'

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
            {children} {variant === ColorEnum.DONE && <CheckIcon />}
        </div>
    )
}
