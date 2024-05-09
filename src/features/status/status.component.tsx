import './status.component.scss'

interface IComponentInterface {
    name: string
}

export const StatusComponent = (props: IComponentInterface) => {
    const { name } = props

    return <div className="status-component">{name}</div>
}
