import { Routes, Route } from 'react-router-dom'
import { routes } from 'routes'
import { Suspense } from 'react'

import './app.scss'

export const AppComponent = () => {
    return (
        <Suspense fallback="">
            <div className="app-component">
                <Routes>
                    {routes.map((route, i) => (
                        <Route
                            key={i}
                            path={route.path}
                            element={<route.element />}
                        />
                    ))}
                </Routes>
            </div>
        </Suspense>
    )
}
