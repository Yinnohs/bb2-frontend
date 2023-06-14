export const transformSuppliersTofilterdata = (suppliers, itemSuppliers)=>{
    return suppliers.map((supplier)=>{

        for(const itemSupplier of itemSuppliers){
            if(supplier.supplier_id === itemSupplier.supplier_id){
                return{
                    value: supplier.supplier_id,
                    label: `${supplier.name}`
                }
            }
        }
       
    })
} 