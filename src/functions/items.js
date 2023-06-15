export  const executeItemFormularyFunction = async (values, actions, dispatch, action)=>{

    dispatch(action(values))

    actions.resetForm()
}