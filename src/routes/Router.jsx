import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '../components/layout'
import { NotFoundPage, RegisterPage } from '../pages'

export const Router = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route element={<Layout />}>
                    <Route
                        path="/"
                        element={<Navigate to="/register" replace />}
                    />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route
                        path="*"
                        element={<Navigate to="/error" replace />}
                    />
                    <Route path="/error" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
