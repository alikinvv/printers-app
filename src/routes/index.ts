import { lazy } from 'react'
const main = lazy(() => import('pages/main/main.component'))

export const routes = [
    {
        path: '/',
        element: main,
    },
]
