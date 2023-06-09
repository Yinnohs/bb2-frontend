import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '../components/layout'
import {
    AuthPage,
    LoginPage,
    NotFoundPage,
    RegisterPage,
    ItemListPage,
    ItemDetails,
} from '../pages'

export const Router = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<Navigate to="/auth" replace />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route element={<Layout />}>
                    <Route path="/items" element={<ItemListPage />} />
                    <Route
                        path="/items/details/:id"
                        element={<ItemDetails />}
                    />
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
