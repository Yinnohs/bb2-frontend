export const transformSuppliersTofilterdata = (suppliers, itemSuppliers)=>{
    const suppliersIds = suppliers.map((element)=> element.supplier_id)
    const itemSuppliersIds = itemSuppliers.map((element)=> element.supplier_id)
    const intersecion = suppliersIds.filter((id)=> itemSuppliersIds.indexOf(id) > -1)

    return suppliers.reduce((prev , current, )=>{
        if(!intersecion.includes(current.supplier_id)){
            prev.push( {
                value: current?.supplier_id,
                label: current?.name
            })
        }
        return prev;
    },[])
} 