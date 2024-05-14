import { FC } from 'react'
import { ModalProps } from './types'
import { BackdropStyled, ModalBody, ModalFooter, ModalHeader } from './styles'

export const Modal: FC<ModalProps> = ({
    title,
    children,
    controls,
    onClose,
}) => {
    return (
        <BackdropStyled>
            <div>
                <ModalHeader>
                    {title}
                    <div onClick={onClose}>close</div>
                </ModalHeader>
                <ModalBody>{children}</ModalBody>
                <ModalFooter>{controls}</ModalFooter>
            </div>
        </BackdropStyled>
    )
}
