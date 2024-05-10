import { BottomControlsPanelComponent, StatusListComponent } from 'widgets'

import './main.component.scss'

const MainComponent = () => {
    return (
        <div className="main-component">
            <div className="main-wrapper">
                <StatusListComponent />
            </div>
            <BottomControlsPanelComponent />
        </div>
    )
}

export default MainComponent
