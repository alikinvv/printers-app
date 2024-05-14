export interface IProductList {
    result: IProductListResult
}

interface IProductListResult {
    items: IProductListResultItem[]
    total: number
    last_id: string
}

export interface IProduct extends IProductListResultItem {
    update: IProductUpdate[]
}

export interface IProductUpdate {
    path: string
    count: number
}

interface IProductListResultItem {
    product_id: number
    offer_id: string
}

export interface IProductInfo {
    result: IProductInfoResult
}

interface IProductInfoResult {
    id: number
    name: string
    offer_id: string
    is_archived: boolean
    is_autoarchived: boolean
    barcode: string
    barcodes: string[]
    buybox_price: string
    category_id: number
    type_id: number
    created_at: string
    images: string[]
    has_discounted_item: boolean
    is_discounted: boolean
    discounted_stocks: IProductInfoResultDiscountedstocks
    currency_code: string
    description_category_id: number
    marketing_price: string
    min_price: string
    old_price: string
    premium_price: string
    price: string
    sources: IProductInfoResultSource[]
    stocks: IProductInfoResultDiscountedstocks
    errors: any[]
    updated_at: string
    vat: string
    visible: boolean
    visibility_details: IProductInfoResultVisibilitydetails
    price_indexes: IProductInfoResultPriceindexes
    commissions: IProductInfoResultCommission[]
    volume_weight: number
    is_prepayment: boolean
    is_prepayment_allowed: boolean
    images360: any[]
    is_kgt: boolean
    color_image: string
    primary_image: string
    status: IProductInfoResultStatus
}

interface IProductInfoResultStatus {
    state: string
    state_failed: string
    moderate_status: string
    decline_reasons: any[]
    validation_state: string
    state_name: string
    state_description: string
    is_failed: boolean
    is_created: boolean
    state_tooltip: string
    item_errors: IProductInfoResultStatusItemerror[]
    state_updated_at: string
}

interface IProductInfoResultStatusItemerror {
    code: string
    field: string
    attribute_id: number
    state: string
    level: string
    description: string
    optional_description_elements: Optionaldescriptionelements
    attribute_name: string
}

interface Optionaldescriptionelements {}

interface IProductInfoResultCommission {
    delivery_amount: number
    percent: number
    return_amount: number
    sale_schema: string
    value: number
}

interface IProductInfoResultPriceindexes {
    external_index_data: Externalindexdata
    ozon_index_data: Externalindexdata
    price_index: string
    self_marketplaces_index_data: Externalindexdata
}

interface Externalindexdata {
    minimal_price: string
    minimal_price_currency: string
    price_index_value: number
}

interface IProductInfoResultVisibilitydetails {
    has_price: boolean
    has_stock: boolean
    active_product: boolean
}

interface IProductInfoResultSource {
    is_enabled: boolean
    sku: number
    source: string
}

interface IProductInfoResultDiscountedstocks {
    coming: number
    present: number
    reserved: number
}

export interface IProductImportStocksParams {
    stocks: IProductImportStocksParamsStock[]
}

interface IProductImportStocksParamsStock {
    offer_id?: string
    product_id?: number
    stock: number
}

export interface IProductImportStocks {
    result: IProductImportStocksResult[]
}

interface IProductImportStocksResult {
    product_id: number
    offer_id: string
    updated: boolean
    errors: any[]
}
