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
import {
    AdminPanel,
    SupplierPage,
    UserPage,
    PriceReductionsPage,
} from '../pages/admin'

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
                    <Route path="/admin" element={<AdminPanel />} />
                    <Route path="/admin/users/" element={<UserPage />} />
                    <Route
                        path="/admin/discounts/"
                        element={<PriceReductionsPage />}
                    />
                    <Route
                        path="/admin/suppliers/"
                        element={<SupplierPage />}
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
