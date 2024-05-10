import { ButtonComponent } from 'shared'
import './bottom-controls-panel.component.scss'
import { ColorEnum } from 'enums'

export const BottomControlsPanelComponent = () => {
    return (
        <div className="bottom-controls-panel-component">
            <ButtonComponent variant={ColorEnum.GRAY}>
                Показать товары
            </ButtonComponent>
        </div>
    )
}
