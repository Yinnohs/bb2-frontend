 export const authenticateFunction = async (values, actions, dispatch, action) => {
    values.email.toLowerCase()

    dispatch(action(values))

    actions.resetForm()
}