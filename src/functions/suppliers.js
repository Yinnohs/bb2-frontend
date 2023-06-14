export const transformSuppliersTofilterdata = (suppliers, itemSuppliers)=>{
    const suppliersIds = suppliers.map((element)=> element.supplier_id)
    const itemSuppliersIds = itemSuppliers.map((element)=> element.supplier_id)
    const intersecion = suppliersIds.filter((id)=> itemSuppliersIds.indexOf(id) > -1)

    return suppliers.reduce((supplier)=>{
        console.log(supplier)
        if(intersecion.includes(supplier.supplier_id)){
            return supplier
        }
    },[])
} 