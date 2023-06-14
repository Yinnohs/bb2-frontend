export const transformPriceReductionsToFilterData = (priceReductions, itemPriceReductions)=>{
    return priceReductions.map((priceReduction)=>{
        for( const price of itemPriceReductions){
            if(priceReduction.price_reduction_id == price.price_reduction_id){
                return {
                    value: priceReduction.price_reduction_id,
                    label: `${priceReduction.reduced_price}`
                }
            }
        }
       
    })
}