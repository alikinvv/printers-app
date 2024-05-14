import { FC } from 'react'
import { ButtonStyled } from './styles'
import { ButtonSquareProps } from './types'

export const ButtonSquare: FC<ButtonSquareProps> = ({
    onClick,
    icon,
    style,
}) => {
    return (
        <ButtonStyled
            {...{
                onClick,
            }}
            style={style}
        >
            {icon}
        </ButtonStyled>
    )
}
