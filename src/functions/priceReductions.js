export const transformPriceReductionsToFilterData = (priceReductions, itemPriceReductions)=>{
    const priceReductionsIds = priceReductions.map((element)=> element.price_reduction_id)
    const itempriceReductionsIds = itemPriceReductions.map((element)=> element.price_reduction_id)
    const intersecion = priceReductionsIds.filter((id)=> itempriceReductionsIds.indexOf(id) > -1)

    return priceReductions.reduce((prev , current, )=>{
        if(!intersecion.includes(current.price_reduction_id)){
            prev.push( {
                value: current['price_reduction_id'],
                label: `${current?.reduced_price * 100}% until ${current?.end_date}`
            })
        }
        return prev;
    },[])
}

export const formatPrice = (price, discount)=>{
    if(price === null || price === undefined || isNaN(price)) return 0
    if(discount === 1 ) return price
    const formattedDiscount = 1 - discount
    return price * formattedDiscount 
}