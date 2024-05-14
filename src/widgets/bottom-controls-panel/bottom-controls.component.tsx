import { ButtonComponent } from 'shared'
import './bottom-controls-panel.component.scss'
import { ColorEnum } from 'enums'
import { setProductList, useLazyGetProductListQuery } from 'store'
import { useEffect } from 'react'
import { useAppDispatch } from 'hooks'

export const BottomControlsPanelComponent = () => {
    const dispatch = useAppDispatch()
    const [getProductList, { data: products }] = useLazyGetProductListQuery()

    useEffect(() => {
        products && dispatch(setProductList(products))
    }, [products])

    return (
        <div className="bottom-controls-panel-component">
            <ButtonComponent
                variant={products ? ColorEnum.DONE : ColorEnum.GRAY}
                onClick={() => getProductList()}
            >
                Cписок товаров
            </ButtonComponent>
        </div>
    )
}
