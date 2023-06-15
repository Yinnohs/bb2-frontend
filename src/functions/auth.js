import { logout } from '../features'

export const authenticateFunction = async (
    values,
    actions,
    dispatch,
    action,
) => {
    values?.email?.toLowerCase()

    dispatch(action(values))

    actions.resetForm()
}

export const logoutUser = (distpatch, navigation) => {
    distpatch(logout())
    navigation('/')
}
